"use client";
import { filterCourse } from "@/api/course";
import { searchData } from "@/store/appSlice";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

function ButtonSearch() {
  const [search, setSearch] = useState();
  const route = useRouter();
  const dispatch = useDispatch();
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  const handleSearchCourse = (values: any) => {
    filterCourse({
      name: values,
    }).then((res) => {
      if (res.status === 200) {
        dispatch(searchData(res?.data?.data));
        route.push("/courses/search");
      }
    });
  };
  return (
    <>
      <Input.Search
        placeholder="Tìm kiếm khóa học"
        onSearch={(value) => {
          handleSearchCourse(value);
        }}
        onChange={handleSearch}
        value={search}
      />
    </>
  );
}

export default ButtonSearch;
