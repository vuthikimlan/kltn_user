// "use client";

import { getAllBlog } from "@/api/blog";
import { Key } from "react";
import CarouselBlog from "./CarouselBlog";
import MenuBlog from "../Menu/MenuBlog";
import banner from "../../../public/reading-girl-2.png";
import Image from "next/image";

async function BlogList() {
  const res = await getAllBlog();
  let blog: any = [];
  if (res) {
    blog = res?.data?.items;
  }

  const groupBlog = blog?.reduce((acc: any, cur: any) => {
    if (!acc[cur.field?.title]) {
      acc[cur.field?.title] = [];
    }
    acc[cur.field?.title].push(cur);
    return acc;
  }, {});

  return (
    <div>
      <div className="border-[1px] border-solid border-[#f7f9fa] p-[20px] relative left-[45rem] ">
        <Image src={banner} alt="" className="w-[38%] h-[38%] " />
      </div>
      <MenuBlog />
      <div className=" w-[80rem] my-[20px] mx-[auto]   ">
        {Object.keys(groupBlog).map((items: any, ind: Key) => {
          return (
            <div
              key={ind}
              className=" border-b-[1px] border-solid border-[#d1d7dc] pb-[60px]  "
            >
              <h1 className="text-4xl font-semibold font-serif pt-[24px] pb-[28px] ">
                {items}
              </h1>
              <div className="flex ">
                {groupBlog[items].map((blog: any, ind: Key) => {
                  return (
                    <div key={ind} className="w-[30%]">
                      <CarouselBlog items={blog} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;
