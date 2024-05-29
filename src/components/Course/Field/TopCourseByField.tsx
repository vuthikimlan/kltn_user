// "use client";

// import { useEffect, useState } from "react";
import { getFieldBySlug } from "@/api/field";
import { Skeleton } from "antd";
import CarouselCourse from "../Carousel";

async function TopCourseByField({ slug }: any) {
  const res = await getFieldBySlug(slug);
  let field: any = {};
  if (res) {
    field = res?.data;
  }
  if (!field) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }

  const course = (field as any)?.topics.flatMap((el: any) => {
    return el?.courses?.flatMap((el: any) => {
      return el;
    });
  });

  const approvedCourse = course.filter((el: any) => {
    return el.isApprove;
  });

  return (
    <>
      <CarouselCourse dataCourse={approvedCourse} />
    </>
  );
}

export default TopCourseByField;
