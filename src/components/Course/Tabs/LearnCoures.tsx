"use client";

import IntroduceCourse from "../introduceCourse";
import CommentList from "../../Comment/CommentList";
import ContentCourse from "../Collapse/ContentCourse";
import { useParams } from "next/navigation";
import { getCourseBySlug } from "@/api/course";
import TabsComponent from "@/components/Tabs/Tabs";
import { Progress, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { getProgressUser } from "@/api/user";
import AssignmentList from "../Assignments/AssignmentList";

function LearningCourse() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [data, setData] = useState<any>({});
  const [percentProgress, setPercentProgress] = useState<any>({});
  const [completed, setCompleted] = useState<any>([]);

  const handleGetSlug = async () => {
    await getCourseBySlug(slug).then((res) => {
      setData(res?.data);
    });
  };
  const courseId = data?._id;

  const handleGetProgressUser = async () => {
    getProgressUser(courseId).then((res) => {
      setPercentProgress(res?.data?.data?.progressPercentage);
      setCompleted(res?.data?.data?.completedLectures);
    });
  };

  useEffect(() => {
    handleGetSlug();
    if (courseId) {
      handleGetProgressUser();
    }
  }, [courseId]);

  if (!data) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }
  return (
    <>
      <div className=" border-[1px] boder-solid border-[#f0f0f0] bg-[#f0f0f0] text-[#fff] p-[20px] flex justify-around items-center">
        <h1 className="w-[30%] ml-[30px] mt-[10px] text-slate-500 ">
          {data?.name}
        </h1>
        <div className="flex items-center ">
          <p className="text-slate-500 mr-[10px] ">Tiến độ của bạn</p>
          <Progress type="circle" percent={percentProgress} size={50} />
        </div>
      </div>
      <div>
        <div className=" cursor-pointer ">
          <ContentCourse
            data={data}
            completedLectures={completed}
            handleGetProgressUser={handleGetProgressUser}
          />
        </div>
        <div className="ml-[20px] w-[75%] ">
          <TabsComponent
            label1="Tổng quan"
            label2="Đánh giá"
            label3="Bài tập"
            children1={<IntroduceCourse course={data} />}
            children2={
              <CommentList
                courseId={courseId}
                totalRatings={data?.totalRatings}
              />
            }
            children3={<AssignmentList courseId={courseId} />}
          />
        </div>
      </div>
    </>
  );
}
export default LearningCourse;
