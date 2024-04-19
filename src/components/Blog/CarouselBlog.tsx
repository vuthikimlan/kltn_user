"use client";
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Col, Row } from "antd";
import "swiper/css/navigation";
import "swiper/css";
import { filterBlog } from "@/api/blog";
import { Key, useEffect, useState } from "react";
import Link from "next/link";

function CarouselBlog({ items }: any) {
  const [data, setData] = useState();
  const handleFilterBlog = () => {
    filterBlog({
      title: items?.field?.title,
    }).then((res) => {
      setData(res?.data?.data?.items);
    });
  };

  useEffect(() => {
    handleFilterBlog();
  }, [items]);
  const blog = data as any;

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay]}
        className="mySwiper mx-[100px]"
      >
        <Row gutter={[0, 6]}>
          {blog?.map((items: any, ind: Key) => (
            // console.log(items)

            <SwiperSlide key={ind}>
              <Col>
                <Link href={`/blog/detail/${items?.slug}`}>
                  <div className="flex  ">
                    <div className=" border-r-[1px] border-solid border-[#d1d7dc] mr-[24px] w-[28rem] pr-[15px] ">
                      <h1 className="text-2xl font-semibold font-mono mb-[10px] w-[20rem] ">
                        {items?.name}
                      </h1>
                      <p className=" mt-[19px] text-[#6a6f73] ">
                        {items?.author?.nameAuthor}
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
            </SwiperSlide>
          ))}
        </Row>
      </Swiper>
    </>
  );
}

export default CarouselBlog;
