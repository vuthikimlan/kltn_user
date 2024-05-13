"use client";

import IntroduceCourse from "../introduceCourse";
import CommentList from "../../Comment/CommentList";
import ContentCourse from "../Collapse/ContentCourse";
import { useParams } from "next/navigation";
import { getCourseBySlug } from "@/api/course";
import TabsComponent from "@/components/Tabs/Tabs";
import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { getCommentByCourse } from "@/api/comment";

function LearningCourse() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [data, setData] = useState<any>({});
  const [comment, setComment] = useState<any>({});

  const handleGetSlug = async () => {
    await getCourseBySlug(slug).then((res) => {
      setData(res?.data);
    });
  };

  const courseId = data?._id;

  // const handleGetComment = (courseId: any) => {
  //   getCommentByCourse(courseId).then((res) => {
  //     setComment(res?.data?.comments);
  //   });
  // };

  useEffect(() => {
    handleGetSlug();
    // handleGetComment(courseId);
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
      <div className=" border-[1px] boder-solid border-[#2d2f31] bg-[#2d2f31] text-[#fff] p-[20px] ">
        <h1 className="w-[30%] m-[auto] ">{data?.name}</h1>
      </div>
      <div>
        <div className=" cursor-pointer ">
          <ContentCourse data={data} />
        </div>
        <div className="ml-[20px] w-[75%] ">
          <TabsComponent
            label1="Tổng quan"
            label2="Đánh giá"
            children1={<IntroduceCourse course={data} />}
            children2={
              <CommentList
                // comment={comment}
                courseId={courseId}
                totalRatings={data?.totalRatings}
                // getcomment={handleGetComment}
              />
            } //getcomment={handleGetSlug}
          />
        </div>
      </div>
    </>
  );
}
export default LearningCourse;
