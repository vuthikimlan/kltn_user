"use client";
import { Pagination } from "antd";
/* eslint-disable @next/next/no-img-element */
import { Key } from "react";
import ButtonSearch from "../Button/Search";
import { ProForm, ProFormSelect } from "@ant-design/pro-components";
import Link from "next/link";

function CourseList({ dataCourse }: any) {
  return (
    <div className="flex justify-between">
      <div className="w-[20rem] mt-[20px] ">
        <ButtonSearch />
        <ProForm layout="vertical">
          <ProFormSelect
            name="select1"
            label="Thể loại"
            request={async () => [
              { label: "all", value: "all" },
              { label: "Unresolved", value: "open" },
              { label: "Resolved", value: "closed" },
              { label: "Resolving", value: "processing" },
            ]}
            placeholder="Please select a country"
          />
          <ProFormSelect
            name="select2"
            label="Chủ đề"
            request={async () => [
              { label: "all", value: "all" },
              { label: "Unresolved", value: "open" },
              { label: "Resolved", value: "closed" },
              { label: "Resolving", value: "processing" },
            ]}
            placeholder="Please select a country"
          />
        </ProForm>
      </div>
      <div>
        {dataCourse.map((items: any, ind: any) => {
          return (
            <div key={ind}>
              <Link href={`http://localhost:3000/course/${items.slug}`}>
                <div className="border-b-[1px] border-solid border-[#e4e8eb] mt-[10px] w-[55rem] ">
                  <div className="flex justify-between my-[20px] ">
                    <img
                      src={items.image}
                      alt=""
                      className=" w-[240px] h-[135px] "
                    />
                    <div className=" ">
                      <p className="font-semibold">{items.name} </p>
                      <p className="w-[35rem] sm ">{items?.description}</p>
                      <span className="text-xs ">
                        Bởi {items.createdBy?.name}
                      </span>
                      <div className="flex text-xs my-[5px] ">
                        <p>{`${items?.totalRatings} xếp hạng `}</p>
                        <p className="ml-[10px] ">
                          {`${items?.userRatings} xếp hạng `}{" "}
                        </p>
                      </div>
                      <ul className="flex list-disc text-xs ">
                        <li className="ml-[15px] "> Tổng số 28 giờ </li>
                        <li className="ml-[20px] ">
                          {" "}
                          {`${items.totalLecture} bài giảng`}{" "}
                        </li>
                        <li className="ml-[20px] ">{items.level}</li>
                      </ul>
                    </div>
                    <p className="text-lg font-semibold">₫ {items.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
        <div className="w-[13%] m-[auto] py-[20px]  ">
          <Pagination defaultCurrent={5} total={10} />
        </div>
      </div>
    </div>
  );
}

export default CourseList;
