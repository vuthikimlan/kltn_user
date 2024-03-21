"use client";

import { Tabs } from "antd";
import type { TabsProps } from "antd";
import CarouselCourse from "../Carousel";
import { dataCourse } from "../../DataDemo";
import { dataCourseField } from "../../DataDemo";
import CourseList from "../CourseList";
import { Key } from "react";
import Topic from "../../Category/Topic";

function CourseByField() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Thịnh hành", // Lấy khóa học có nhiều học viên nhất
      children: <CarouselCourse dataCourse={dataCourse} />,
    },
    {
      key: "2",
      label: "Mới", // Lấy khóa học có ngày tạo mới nhất và đã đc phê duyệt
      children: <CarouselCourse dataCourse={dataCourseField} />,
    },
  ];
  return (
    <div className=" mx-[10%] pt-[48px] ">
      <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold mb-[48px] ">
        Khóa học phát triển
      </h1>

      <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] ">
        Các khóa học để bạn bắt đầu
      </h1>

      <Tabs items={items} defaultActiveKey="1" />

      <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] mt-[30px] ">
        Chủ đề phổ biến{" "}
      </h1>
      <Topic />

      <h1 className="text-[#2d2f31] text-2xl font-semibold my-[20px] ">
        Tất cả các khóa học phát triển
      </h1>
      <div>
        <CourseList dataCourse={dataCourse} />
      </div>
    </div>
  );
}

export default CourseByField;
