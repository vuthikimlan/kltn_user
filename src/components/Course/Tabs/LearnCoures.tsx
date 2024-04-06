"use client";

import { Tabs, TabsProps } from "antd";
import IntroduceCourse from "../introduceCourse";
import CommentList from "../../Comment/CommentList";
import ContentCourse from "../Collapse/ContentCourse";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourseBySlug } from "@/api/course";

function LearningCourse() {
  const [data, setData] = useState({});
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const handleGetSlug = () => {
    getCourseBySlug(slug).then((res) => {
      setData(res?.data);
    });
  };
  useEffect(() => {
    handleGetSlug();
  }, [slug]);

  const course = data as any;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tổng quan",
      children: <IntroduceCourse course={data} />,
    },
    {
      key: "2",
      label: "Đánh giá",
      children: <CommentList course={data} getcomment={handleGetSlug} />,
    },
  ];
  return (
    <>
      <div className=" border-[1px] boder-solid border-[#2d2f31] bg-[#2d2f31] text-[#fff] p-[20px] ">
        <h1 className="w-[30%] m-[auto] ">{course?.name}</h1>
      </div>
      <div>
        <div className=" cursor-pointer ">
          <ContentCourse data={data} />
        </div>
        <div className="ml-[20px] w-[75%] ">
          <Tabs items={items} defaultActiveKey="1" />
        </div>
      </div>
    </>
  );
}

export default LearningCourse;
