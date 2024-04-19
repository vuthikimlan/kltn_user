/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";

import { getBlogBySlug } from "@/api/blog";
import { useParams } from "next/navigation";

async function BlogBySlug() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const res = await getBlogBySlug(slug);
  let blog: any = {};
  if (res) {
    blog = res?.data;
  }

  return (
    <div>
      <div className=" border-[1px] border-solid border-[#f7f9fa] bg-[#f7f9fa] ">
        <div className="w-[60%] mx-[auto] my-[30px] py-[20px] ">
          <p className="text-lg font-semibold ">{blog?.field?.title} </p>
          <h1 className="font-semibold text-4xl font-serif">{blog?.name} </h1>
        </div>
      </div>

      <div className="w-[60%] mx-[auto] my-[30px] ">
        <div className="flex items-center border-b-[1px] border-solid border-[#d1d7dc] py-[22px] mb-[30px] ">
          <img
            src={blog?.author?.avatar}
            alt=""
            className="w-[50px] h-[50px] border-[1px] border-transparent border-solid rounded-[50%] "
          />
          <p className=" ml-[15px] text-[#6a6f73] ">
            {blog?.author?.nameAuthor}
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
      </div>
    </div>
  );
}

export default BlogBySlug;
