"use client";

import { Skeleton, Tabs } from "antd";
import { Key, useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { getFieldBySlug } from "@/api/field";
import { TabsProps } from "antd/lib";
import CarouselCourse from "../Carousel";
import MenuTopic from "@/components/Menu/MenuTopic";
import Topic from "@/components/Category/Topic";
import CourseList from "../CourseList";
import TabsComponent from "@/components/Tabs/Tabs";

function CourseByField() {
  const [field, setField] = useState<any>({});
  const params = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);

  const slug = params.slug;
  useEffect(() => {
    getFieldBySlug(slug)
      .then((res) => {
        setField(res?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  // Nếu field không có dữ liệu thì sẽ hiển thị loading
  if (loading || !field) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }

  const dataTopic = field?.topics;

  const course = field?.topics.flatMap((el: any) => {
    return el?.courses?.flatMap((el: any) => {
      return el;
    });
  });

  return (
    <>
      <div className="border-t-[1px] border-solid border-[#d1d7dc] shadow-md">
        <MenuTopic dataTopic={dataTopic} slugField={field?.slug} />
      </div>
      <div className=" mx-[8%] pt-[48px] ">
        <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold mb-[48px] ">
          {`Khóa học ${field?.title} `}
        </h1>

        <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] ">
          Các khóa học để bạn bắt đầu
        </h1>

        <TabsComponent
          label1="Thịnh hành"
          label2="Mới"
          children1={<CarouselCourse dataCourse={course} />}
          children2={<CarouselCourse dataCourse={course} />}
        />

        <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] mt-[30px] ">
          Chủ đề phổ biến{" "}
        </h1>
        <div className="flex  grid-cols-3 grid gap-x-3  ">
          {dataTopic.map((item: any, ind: Key) => {
            return (
              <div key={ind} className=" ">
                <Topic dataTopic={item} />
              </div>
            );
          })}
        </div>

        <h1 className="text-[#2d2f31] text-2xl font-semibold my-[20px] ">
          {`Tất cả các khóa học ${field?.title} `}
        </h1>
        <div>
          <CourseList dataCourse={course} />
        </div>
      </div>
    </>
  );
}

export default CourseByField;
