"use client";
import { Pagination } from "antd";
/* eslint-disable @next/next/no-img-element */
import { Key } from "react";
import ButtonSearch from "../Button/Search";
import { ProForm, ProFormSelect } from "@ant-design/pro-components";

interface Datatype {
  name: string | null | undefined;
  image: string | undefined;
  author: string | null | undefined;
  price: number | null | undefined;
}

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
        {dataCourse.map((items: Datatype, ind: any) => {
          return (
            <>
              <div className="border-b-[1px] border-solid border-[#e4e8eb] mt-[10px] w-[63rem] ">
                <div className="flex justify-between my-[20px] ">
                  <img
                    src={items.image}
                    alt=""
                    className=" w-[240px] h-[135px] "
                  />
                  <div className=" ">
                    <p className="font-semibold">{items.name} </p>
                    <p className="w-[40rem] sm ">
                      Become a Full-Stack Web Developer with just ONE course.
                      HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and
                      DApps
                    </p>
                    <span className="text-xs ">Bởi {items.author}</span>
                    <div className="flex text-xs my-[5px] ">
                      <p>4,9 sao</p>
                      <p className="ml-[10px] ">(1) </p>
                    </div>
                    <ul className="flex list-disc text-xs ">
                      <li className="ml-[15px] "> Tổng số 28 giờ </li>
                      <li className="ml-[20px] "> 191 bài giảng </li>
                      <li className="ml-[20px] ">Trình độ</li>
                    </ul>
                  </div>
                  <p className="text-lg font-semibold">₫ {items.price}</p>
                </div>
              </div>
            </>
          );
        })}
        <div className="w-[10%] m-[auto] py-[20px]  ">
          <Pagination defaultCurrent={5} total={10} />
        </div>
      </div>
    </div>
  );
}

export default CourseList;
