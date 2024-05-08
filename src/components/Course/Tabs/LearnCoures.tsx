"use client";

import IntroduceCourse from "../introduceCourse";
import CommentList from "../../Comment/CommentList";
import ContentCourse from "../Collapse/ContentCourse";
import { useParams } from "next/navigation";
import { getCourseBySlug } from "@/api/course";
import TabsComponent from "@/components/Tabs/Tabs";
import { Skeleton } from "antd";
import { useEffect, useState } from "react";

function LearningCourse() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const [data, setData] = useState<any>(null);

  const handleGetSlug = () => {
    getCourseBySlug(slug).then((res) => {
      setData(res?.data);
    });
  };

  useEffect(() => {
    handleGetSlug();
  }, []);

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
          {/* <Tabs items={items} defaultActiveKey="1" /> */}
          <TabsComponent
            label1="Tổng quan"
            label2="Đánh giá"
            children1={<IntroduceCourse course={data} />}
            children2={<CommentList course={data} getcomment={handleGetSlug} />} //getcomment={handleGetSlug}
          />
        </div>
      </div>
    </>
  );
}
export default LearningCourse;
