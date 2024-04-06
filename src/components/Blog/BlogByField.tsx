/* eslint-disable @next/next/no-img-element */
"use client";

import { filterBlog } from "@/api/blog";
import { Skeleton } from "antd";
import { Image } from "antd/lib";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Key, useEffect, useState } from "react";

function BlogByField() {
  const [data, setData] = useState([]);
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  useEffect(() => {
    filterBlog({
      slugField: slug,
    }).then((res) => {
      setData(res?.data?.data?.items);
    });
  }, [slug]);
  if (!Object.keys(data).length) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }

  //   console.log("blog", blog);

  return (
    <div className=" w-[80rem] my-[20px] mx-[auto] mt-[10rem] ">
      {data.map((el: any, ind: Key) => (
        <Link href={`/blog/detail/${el?.slug}`} key={ind}>
          <div className="flex  ">
            <div className=" border-r-[1px] border-solid border-[#d1d7dc] mr-[24px] w-[28rem] pr-[15px] ">
              <h1 className="text-2xl font-semibold font-mono mb-[10px] w-[20rem] ">
                {el?.name}
              </h1>
              <div className="flex items-center ">
                <img
                  src={el?.author?.avatar}
                  alt=""
                  className="w-[50px] h-[50px] border-[1px] border-transparent border-solid rounded-[50%] "
                />
                <p className=" ml-[15px] text-[#6a6f73] ">
                  {el?.author?.nameAuthor}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogByField;
