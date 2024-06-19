"use client";
import { getQuestion, submitAssignment } from "@/api/course";
import { CheckOutlined } from "@ant-design/icons";
import { ProFormTextArea } from "@ant-design/pro-components";
import { Button, Form, Modal, Radio, Result, Skeleton, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  use,
  useEffect,
  useState,
} from "react";

function QuestionList() {
  const params = useParams<{ id: any }>();
  const { id } = params;
  const [courseId, assignmentId] = id;
  const [question, setQuestion] = useState<any>();
  const [answers, setAnswers] = useState<any>({});
  const [data, setData] = useState<any>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleGetQuestion = async () => {
    const res = await getQuestion(courseId, assignmentId);
    setQuestion(res?.data);
  };

  useEffect(() => {
    handleGetQuestion();
  }, []);

  const handleRadioChange = (e: any) => {
    const questionId = e.target.name.split("-")[0]; // Extract question ID from input name
    setAnswers({ ...answers, [questionId]: e.target.value }); // Update answer object
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const questionId = e.target.name; // Extract question ID from input name
    setAnswers({ ...answers, [questionId]: e.target.value }); // Update answer object
  };

  const onFinish = () => {
    submitAssignment(courseId, assignmentId, answers).then((res) => {
      if (res?.data?.success === true) {
        setIsSubmit(true);
        setData(res?.data?.data);
        message.success("Bạn đã hoàn thành bài tập thành công");
      } else if (res?.data?.success === false) {
        message.error(res?.data?.error);
      }
    });
  };

  if (!question || question.length === 0) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }

  if (isSubmit) {
    return (
      <div className="font-mono w-[40%] mx-[auto] mt-[6rem] ">
        <div className="mb-[10px] ">
          <p className=" my-[10px] text-2xl ">
            Bạn đã hoàn thành bài tập với tổng số {data?.score}/
            {data?.totalQuestions} câu
          </p>
          {data?.questions.map((question: any, index: number) => {
            const isCorrect = data.answers.find(
              (answer: { questionId: any }) =>
                answer.questionId === question.questionId
            ).isCorrect;
            return (
              <div key={question.questionId} className=" mt-[20px] ">
                <h3 className="pb-[12px] italic font-semibold ">
                  Câu {index + 1}: {question.question}
                  {isCorrect ? (
                    <CheckOutlined
                      style={{ color: "green", marginLeft: "10px" }}
                    />
                  ) : (
                    <span style={{ color: "red", marginLeft: "10px" }}>*</span>
                  )}
                </h3>
                {question.type === "multiple-choice" ? (
                  <>
                    <Radio.Group
                      value={
                        data.answers.find(
                          (answer: { questionId: Key | null | undefined }) =>
                            answer.questionId === question.questionId
                        ).answer
                      }
                    >
                      {question.options.map((option: any) => (
                        <Radio key={option._id} value={option.option}>
                          {option.option}
                        </Radio>
                      ))}
                    </Radio.Group>
                    {isCorrect ? (
                      <></>
                    ) : (
                      <p className="pt-[12px] italic">
                        Đáp án đúng:{" "}
                        {
                          question.options.find(
                            (option: { isCorrect: any }) => option.isCorrect
                          )?.option
                        }
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <TextArea
                      style={{ color: "#000000" }}
                      disabled
                      defaultValue={
                        data.answers.find(
                          (answer: { questionId: Key | null | undefined }) =>
                            answer.questionId === question.questionId
                        ).answer
                      }
                    />
                    {isCorrect ? (
                      <></>
                    ) : (
                      <p className="pt-[6px] italic ">
                        Đáp án đúng: {question.answer}
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "170px" }}
          className="button mx-[78%] my-[30px] w-[135px] "
          onClick={() => {
            setIsSubmit(false);
          }}
        >
          Làm lại
        </Button>
      </div>
    );
  }

  return (
    <div className=" font-mono w-[40%] my-[5%] mx-[auto]">
      <p className=" my-[10px] text-2xl ">
        Hoàn thành các bài tập sau để củng cố kiến thức của bạn:
      </p>
      <Form onFinish={onFinish}>
        {question.map((item: any, ind: number) => {
          return (
            <div key={ind}>
              <h1 className="mt-[10px] pb-[10px] italic font-semibold  text-lg  ">
                Câu {ind + 1}: {item.question} 
              </h1>
              <div>
                <Radio.Group name={item._id} onChange={handleRadioChange}>
                  {item.options && item.options.length > 0 ? (
                    <ul className="grid grid-cols-4 gap-[3rem]">
                      {item.options.map((option: any, index: number) => (
                        <li key={index}>
                          <Radio key={index} value={option.option}>
                            {option.option}
                          </Radio>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <TextArea
                      name={item?._id} // Set unique name for answer
                      onChange={handleTextAreaChange}
                      value={answers[item?._id] || ""}
                    />
                  )}
                </Radio.Group>
              </div>
            </div>
          );
        })}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "170px" }}
            className="button mx-[70%] my-[30px] w-[135px] "
          >
            Nộp bài
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default QuestionList;
