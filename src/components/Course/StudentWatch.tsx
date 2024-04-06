/* eslint-disable @next/next/no-async-client-component */
"use client";

import React, { useEffect, useState } from "react";
import CarouselCourse from "./Carousel";
import { getAllCourse } from "../../api/course";

function StudentWatch() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    getAllCourse().then((res) => {
      setCourse(res?.data?.items.slice(0, 4));
    });
  }, []);

  return (
    <>
      <CarouselCourse dataCourse={course} />
    </>
  );
}

export default StudentWatch;
