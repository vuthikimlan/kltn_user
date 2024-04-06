"use client";

import { getAllBlog } from "@/api/blog";
import Link from "next/link";
import { Key, useEffect, useState } from "react";

function MenuBlog() {
  const [data, setData] = useState();
  useEffect(() => {
    getAllBlog().then((res) => {
      setData(res?.data?.items);
    });
  }, []);

  const field = data as any;

  return (
    <div className="border-[1px] border-solid border-[#1c1d1f] bg-[#1c1d1f] shadow-md flex justify-center ">
      {/* <h1 className="text-[#fff] capitalize m-[13px] ">Blog</h1> */}
      <Link href={"/blog"} className=" text-[#fff] m-[13px] ">
        {" "}
        Blog{" "}
      </Link>
      {(field as any)?.map((el: any, ind: Key) => {
        return (
          <div key={ind} className="m-[13px] ">
            <Link href={`http://localhost:3000/blog/${el?.field?.slugField}`}>
              <p className="text-[#fff] capitalize ">{el?.field?.title} </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MenuBlog;
