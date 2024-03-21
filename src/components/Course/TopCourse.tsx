"use client";
import Link from "next/link";
import { dataCourseField } from "../DataDemo";
import CarouselCourse from "./Carousel";

function TopCourse() {
  return (
    <div className="mt-[5%] ">
      <h1 className=" mb-[20px] text-3xl text-[#2d2f31] font-semibold ">
        Các khóa học hàng đầu về{" "}
        <Link
          href={""}
          className=" border-b-[1px] border-solid text-[#8072e6] border-[#8072e6] "
        >
          Phát triển web
          {/* Thay thế bằng tên thể loại */}
        </Link>{" "}
      </h1>
      <CarouselCourse dataCourse={dataCourseField} />
    </div>
  );
}

export default TopCourse;
