"use client";

import { getAllBlog } from "@/api/blog";
import { Key, useEffect, useState } from "react";
import CarouselBlog from "./CarouselBlog";
import MenuBlog from "../Menu/MenuBlog";
import banner from "../../../public/reading-girl-2.png";
import Image from "next/image";

function BlogList() {
  const [data, setData] = useState();
  useEffect(() => {
    getAllBlog().then((res) => {
      setData(res?.data?.items);
    });
  }, []);

  const blog = data as any;

  return (
    <div>
      <div className="border-[1px] border-solid border-[#f7f9fa] p-[20px] relative left-[45rem] ">
        <Image src={banner} alt="" className="w-[38%] h-[38%] " />
      </div>
      <MenuBlog />
      <div className=" w-[80rem] my-[20px] mx-[auto]   ">
        {blog?.map((items: any, ind: Key) => (
          <div
            key={ind}
            className=" border-b-[1px] border-solid border-[#d1d7dc] pb-[60px]  "
          >
            <h1 className="text-4xl font-semibold font-serif pt-[24px] pb-[28px] ">
              {items?.field?.title}
            </h1>
            <CarouselBlog items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
