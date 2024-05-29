"use client";
/* eslint-disable @next/next/no-img-element */
import "swiper/css/navigation";
import "swiper/css";
import Link from "next/link";

function CarouselBlog({ items }: any) {
  return (
    <div className=" w-[30%]">
      <Link href={`/blog/detail/${items?.slug}`} className="text-[#1677ff] ">
        <div className=" ">
          <div className=" border-r-[1px] border-solid border-[#d1d7dc] mr-[24px] w-[22rem] pr-[15px] ">
            <h1 className="text-2xl font-semibold font-mono mb-[10px] w-[20rem] ">
              {items?.name}
            </h1>
            <p className=" mt-[19px] text-[#6a6f73] ">
              {items?.author?.nameAuthor}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CarouselBlog;
