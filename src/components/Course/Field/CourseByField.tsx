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

function CourseByField() {
  const [field, setField] = useState({});
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  useEffect(() => {
    getFieldBySlug(slug).then((res) => {
      setField(res?.data);
    });
  }, [slug]);

  // Nếu field không có dữ liệu thì sẽ hiển thị loading

  const dataField = field as any;
  const dataTopic = dataField?.topics;

  const course = dataField?.topics.flatMap((el: any) => {
    return el?.courses?.flatMap((el: any) => {
      return el;
    });
  });
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Thịnh hành", // Lấy khóa học có nhiều học viên nhất
      children: <CarouselCourse dataCourse={course} />,
    },
    {
      key: "2",
      label: "Mới", // Lấy khóa học có ngày tạo mới nhất và đã đc phê duyệt
      children: <CarouselCourse dataCourse={course} />,
    },
  ];
  return (
    <>
      <div className="border-t-[1px] border-solid border-[#d1d7dc] shadow-md">
        <MenuTopic dataTopic={dataTopic} slugField={dataField?.slug} />
      </div>
      <div className=" mx-[8%] pt-[48px] ">
        <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold mb-[48px] ">
          {`Khóa học ${dataField?.title} `}
        </h1>

        <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] ">
          Các khóa học để bạn bắt đầu
        </h1>

        <Tabs items={items} defaultActiveKey="1" />

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
          {`Tất cả các khóa học ${dataField?.title} `}
        </h1>
        <div>
          <CourseList dataCourse={course} />
        </div>
      </div>
    </>
  );
}

export default CourseByField;
