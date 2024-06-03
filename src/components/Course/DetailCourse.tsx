"use client";
import CommentCourse from "../Comment/Comment";
import CollapseCourse from "./Collapse/Collapse";
import ButtonAddCart from "../Button/AddCart";
import { useParams } from "next/navigation";
import { getCourseBySlug } from "@/api/course";
import { CheckOutlined } from "@ant-design/icons";
import { Rate, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { getCommentByCourse } from "@/api/comment";

function DetaileCourse() {
  const params = useParams<{ slug: string }>();
  const [course, setCourse] = useState<any>({});
  const [comment, setComment] = useState<any>();
  const slug = params.slug;

  const handleGetCourseBySlug = async () => {
    const res = await getCourseBySlug(slug);
    setCourse(res?.data);
  };
  const courseId = course?._id;
  const handleGetComment = (courseId: any) => {
    getCommentByCourse(courseId).then((res) => {
      setComment(res?.data?.comments);
    });
  };

  useEffect(() => {
    handleGetCourseBySlug();
    handleGetComment(courseId);
  }, [courseId]);

  const users = course?.users?.length;
  const parts = course?.parts?.length;

  if (!course || !comment) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#2d2f31] text-[#fff] py-[32px] relative ">
        <div className="banner w-[50%] m-[auto]">
          <h1 className=" text-3xl font-bold w-[65%] mb-[16px]  ">
            {course?.name}
          </h1>
          <p className="mb-[24px] font-sans ">{course?.description}</p>
          <div className="font-sans text-sm">
            <span className="mr-[10px] font-sans ">
              {course?.userRatings} xếp hạng
            </span>{" "}
            <span className="mr-[10px] font-sans ">{users} học viên</span>{" "}
            <br />
            <p className="font-sans mt-[10px] ">{`Được tạo bởi ${course?.createdBy?.name} `}</p>
          </div>
        </div>

        {/* <img
          src="https://img-c.udemycdn.com/course/240x135/5391834_7008_2.jpg"
          className="absolute"
        /> */}
      </div>
      <div className="w-[50%] m-[auto] ">
        <div className="pt-[24px] mb-[32px]  ">
          <div className=" border-[1px] border-solid pt-[24px] pb-[26px] px-[10px] ">
            <h1 className="ml-[24px] text-xl font-semibold  mb-[10px]  ">
              Nội dung bài học
            </h1>
            <ul className=" grid-cols-2 grid gap-2 ">
              {course?.lessonContent?.map((el: any, ind: any) => {
                return (
                  <div key={ind} className="flex items-baseline ">
                    <CheckOutlined className="mt-[6px] " />
                    <li className="ml-[10px] mb-[5px] text-sm ">{el} </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" mb-[20px] ">
          <div className="mb-[25px] contentCourse ">
            <h1 className=" text-xl font-semibold mb-[16px] ">
              Nội dung khóa học
            </h1>
            <CollapseCourse
              data={course?.parts}
              numPart={parts}
              totalTime={course?.totalTimeCourse}
            />
          </div>
          <div className="mb-[25px] requestCourse ">
            {/* Lấy dữ liệu từ điều kiện tham gia */}
            <h1 className=" text-xl font-semibold mb-[16px] ">Yêu cầu</h1>
            <ul className="list-disc ml-[20px] ">
              {course?.conditionParticipate?.map((el: any, ind: any) => {
                return (
                  <div key={ind} className="flex items-baseline ">
                    <li className="ml-[10px] mb-[5px] ">{el} </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="mb-[25px] descriptionCourse ">
            <h1 className=" text-xl font-semibold mb-[16px] ">Mô tả</h1>
            <div
              dangerouslySetInnerHTML={{ __html: course?.detailsCourse }}
            ></div>
          </div>
          <div className="mb-[25px] objectCourse ">
            <h1 className=" text-xl font-semibold mb-[16px] ">
              {" "}
              Đối tượng của khóa học này:{" "}
            </h1>
            <ul className="list-disc ml-[20px] ">
              {course?.object?.map((el: any, ind: any) => {
                return (
                  <div key={ind} className="flex items-baseline ">
                    <li className="ml-[10px] mb-[5px] ">{el} </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="w-[35%] m-[auto] ">
            <ButtonAddCart courseId={course?._id} />
          </div>
        </div>
        <CommentCourse
          data={comment}
          totalRating={course?.totalRatings}
          ratings={course?.userRatings}
        />
      </div>
    </>
  );
}

export default DetaileCourse;
