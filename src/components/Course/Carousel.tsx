/* eslint-disable @next/next/no-img-element */
"use client";
import React, { Key } from "react";
import { Col, Popover, Row } from "antd";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentPopover from "../ContentPopover/ContentPopover";
import "swiper/css/navigation";
import "swiper/css";

function CarouselCourse({ dataCourse }: any) {
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
          {dataCourse.map((item: any, ind: Key | null | undefined) => (
            // console.log("item", item)
            <SwiperSlide key={ind}>
              <div className="flex ">
                <Col>
                  <Popover
                    content={<ContentPopover items={item} />}
                    placement="right"
                    className="text-[#101112] "
                  >
                    <Link href={`http://localhost:3000/course/${item.slug}`}>
                      <div className="mr-[20px]">
                        <div>
                          <img
                            src={item?.image}
                            alt=""
                            className=" w-[240px] h-[135px] "
                          />
                        </div>
                        <div className="w-[100%] ">
                          <p className="font-medium text-base mb-[2px] mt-[4px] ">
                            {item?.name}
                          </p>
                          <p className="text-xs text-[#6a6f73] mb-[2px] ">
                            {item?.createdBy?.name}
                          </p>
                          <p className="font-medium text-base ">
                            ₫ {item.price}{" "}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Popover>
                </Col>
              </div>
            </SwiperSlide>
          ))}
        </Row>
      </Swiper>
    </>
  );
}

export default CarouselCourse;
