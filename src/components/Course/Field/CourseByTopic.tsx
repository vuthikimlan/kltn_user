"use client";

import { getTopicBySlug } from "@/api/field";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import CarouselCourse from "../Carousel";
import CourseList from "../CourseList";
import TabsComponent from "@/components/Tabs/Tabs";

function CourseByTopic() {
  const params = useParams<{ slug: string; slugTopic: string }>();
  const [data, setData] = useState<any>({});
  const slugField = params.slug;
  const slugTopic = params.slugTopic;

  // const res = await getTopicBySlug(slugField, slugTopic);
  // let data: any = {};
  // if (res) {
  //   data = res?.data;
  // }

  const handleGetTopicBySlug = () => {
    getTopicBySlug(slugField, slugTopic).then((res: any) => {
      setData(res?.data);
    });
  };

  useEffect(() => {
    handleGetTopicBySlug();
  }, [slugField, slugTopic]);

  return (
    <>
      {Object.keys(data).length === 0 && (
        <div>
          <Skeleton active />
        </div>
      )}
      {Object.keys(data).length > 0 && (
        <div className=" mx-[8%] pt-[48px] ">
          <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold mb-[48px] ">
            {`Khóa học ${data?.nameTopic} `}
          </h1>
          <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] ">
            Các khóa học để bạn bắt đầu
          </h1>
          <TabsComponent
            label1="Thịnh hành"
            label2="Mới"
            children1={<CarouselCourse dataCourse={data?.courses} />}
            children2={<CarouselCourse dataCourse={data?.courses} />}
          />
          <h1 className="text-[#2d2f31] text-2xl font-semibold my-[20px] ">
            {`Tất cả các khóa học ${data?.nameTopic} `}
          </h1>
          <div>
            <CourseList dataCourse={data?.courses} />
          </div>
        </div>
      )}
    </>
  );
}

export default CourseByTopic;
