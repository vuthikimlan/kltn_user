"use client";

import React from "react";
import { dataCourse } from "../DataDemo";
import CarouselCourse from "./Carousel";

function StudentWatch() {
  return (
    <>
      <CarouselCourse dataCourse={dataCourse} />
    </>
  );
}

export default StudentWatch;
