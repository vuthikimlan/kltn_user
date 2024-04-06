"use client";

import { useEffect, useState } from "react";
import { getFieldBySlug } from "@/api/field";
import { Skeleton } from "antd";
import CarouselCourse from "../Carousel";

function TopCourseByField({ slug }: any) {
  const [field, setField] = useState({});
  useEffect(() => {
    getFieldBySlug(slug).then((res) => {
      setField(res?.data);
    });
  }, [slug]);
  if (!Object.keys(field).length) {
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
  return (
    <>
      <CarouselCourse dataCourse={course} />
    </>
  );
}

export default TopCourseByField;
