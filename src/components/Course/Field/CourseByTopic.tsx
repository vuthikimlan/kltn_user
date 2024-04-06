"use client";

import { getTopicBySlug } from "@/api/field";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton, Tabs, TabsProps } from "antd";
import CarouselCourse from "../Carousel";
import CourseList from "../CourseList";

function CourseByTopic(): JSX.Element {
  const params = useParams<{ slug: string; slugTopic: string }>();
  const slugField = params.slug;
  const slugTopic = params.slugTopic;

  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTopicBySlug(slugField, slugTopic);
        setData(res?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [slugField, slugTopic]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Thịnh hành",
      children: <CarouselCourse dataCourse={data?.courses} />,
    },
    {
      key: "2",
      label: "Mới",
      children: <CarouselCourse dataCourse={data?.courses} />,
    },
  ];

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
          <Tabs items={items} defaultActiveKey="1" />
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
