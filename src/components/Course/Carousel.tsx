/* eslint-disable @next/next/no-img-element */
import { Col, Popover, Row } from "antd";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentPopover from "../ContentPopover/ContentPopover";
import { Key } from "react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";

interface Datatype {
  name: string | null | undefined;
  image: string | undefined;
  author: string | null | undefined;
  price: number | null | undefined;
}

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
          {dataCourse.map((item: Datatype, ind: Key | null | undefined) => (
            <SwiperSlide key={ind}>
              <div className="flex ">
                <Col>
                  <Link href={"/aa"}>
                    <Popover
                      content={<ContentPopover items={item} />}
                      // title={item.name}
                      className="text-[#101112] "
                    >
                      <div className="mr-[20px]">
                        <div>
                          <img
                            src={item.image}
                            alt=""
                            className=" w-[240px] h-[135px] "
                          />
                        </div>
                        <div className="w-[100%] ">
                          <p className="font-medium text-base mb-[2px] mt-[4px] ">
                            {item.name}
                          </p>
                          <p className="text-xs text-[#6a6f73] mb-[2px] ">
                            {item.author}
                          </p>
                          <p className="font-medium text-base ">
                            ₫ {item.price}{" "}
                          </p>
                        </div>
                      </div>
                    </Popover>
                  </Link>
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
