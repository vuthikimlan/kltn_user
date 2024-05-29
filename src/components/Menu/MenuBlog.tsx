// "use client";

import { getAllBlog } from "@/api/blog";
import Link from "next/link";
import { Key } from "react";

async function MenuBlog() {
  const res = await getAllBlog();
  let blog: any = [];
  if (res) {
    blog = res?.data?.items;
  }

  const uniqueBlog = blog?.reduce((acc: any, cur: any) => {
    const {
      field: { title, slugField },
    } = cur;
    const existingBlog = acc.find((blog: any) => blog.title === title);
    return !existingBlog ? [...acc, { title, slugField }] : acc;
  }, []);

  return (
    <div className="border-[1px] border-solid border-[#1c1d1f] bg-[#1c1d1f] shadow-md flex justify-center ">
      {/* <h1 className="text-[#fff] capitalize m-[13px] ">Blog</h1> */}
      <Link href={"/blog"} className=" text-[#fff] m-[13px] ">
        {" "}
        Blog{" "}
      </Link>
      {uniqueBlog?.map((el: any, ind: Key) => {
        return (
          <div key={ind} className="m-[13px] ">
            <Link href={`http://localhost:3000/blog/${el?.slugField}`}>
              <p className="text-[#fff] capitalize ">{el?.title} </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MenuBlog;
