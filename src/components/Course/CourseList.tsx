"use client";
import { Pagination, Rate } from "antd";
/* eslint-disable @next/next/no-img-element */
import { Key } from "react";
import ButtonSearch from "../Button/Search";
import { ProForm, ProFormSelect } from "@ant-design/pro-components";
import Link from "next/link";

function CourseList({ dataCourse }: any) {
  const total = dataCourse.length;

  return (
    <div className=" mx-[15%]  justify-around ">
      <div className="w-[50rem] mt-[20px] ">
        <ButtonSearch />
      </div>
      <div>
        {dataCourse.map((items: any, ind: any) => {
          return (
            <div key={ind}>
              <Link href={`http://localhost:3000/course/${items.slug}`}>
                <div className="border-b-[1px] border-solid border-[#e4e8eb] mt-[10px] w-[65rem] ">
                  <div className="flex my-[20px] ">
                    <img
                      src={items.image}
                      alt=""
                      className=" w-[240px] h-[135px] "
                    />
                    <div className=" ml-[30px] ">
                      <p className="font-semibold">{items.name} </p>
                      <p className="w-[35rem] sm ">{items?.description}</p>
                      <span className="text-xs ">
                        Bởi {items.createdBy?.name}
                      </span>
                      <div className="flex text-xs my-[5px] ">
                        <p>
                          <Rate disabled defaultValue={items?.totalRatings} />
                        </p>
                        <p className="ml-[10px] ">
                          {`${items?.userRatings} xếp hạng `}{" "}
                        </p>
                      </div>
                      <ul className="flex list-disc text-xs ">
                        <li className="ml-[15px] ">
                          {" "}
                          Tổng số {items?.totalTimeCourse}{" "}
                        </li>
                        <li className="ml-[20px] ">
                          {" "}
                          {`${items.totalLecture} bài giảng`}{" "}
                        </li>
                        <li className="ml-[20px] ">{items.level}</li>
                      </ul>
                    </div>
                    {items.discountedPrice > 0 ? (
                      <>
                        <div className=" flex">
                          <p className="font-medium text-base ">
                            ₫ {items.discountedPrice.toLocaleString("en")}{" "}
                          </p>
                          <p className="font-normal text-base text-[#6a6f73] ml-[10px] line-through ">
                            ₫ {items.price.toLocaleString("en")}{" "}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="font-medium text-base ">
                          ₫ {items.price.toLocaleString("en")}{" "}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
        <div className="w-[13%] m-[auto] py-[20px]  ">
          <Pagination defaultCurrent={1} total={total} />
        </div>
      </div>
    </div>
  );
}

export default CourseList;
