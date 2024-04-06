"use client";

import { useSelector } from "react-redux";
import CourseList from "./CourseList";
import { RootState } from "@/store/store";
import { Key } from "react";

function SearchCourse() {
  const dataSearch = useSelector((state: RootState) => state.app.searchData);
  const dataCourse = (dataSearch as any)?.items?.map((el: any) => {
    return el;
  });

  return (
    <div className="w-[85rem] mx-[auto] my-[10px] ">
      <h1 className="text-2xl font-semibold mt-[20px] ">
        {(dataSearch as any)?.total} kết quả tìm kiếm{" "}
      </h1>
      <CourseList dataCourse={dataCourse} />
    </div>
  );
}

export default SearchCourse;
