/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Key, useEffect, useState } from "react";
import { getProfileUser } from "@/api/user";

function MyCourses() {
  const [myCourse, setMyCourse] = useState([]);

  useEffect(() => {
    getProfileUser().then((res) => {
      setMyCourse(res?.data?.data?.boughtCourses);
    });
  }, []);

  return (
    <>
      <div className="mx-[10%] ">
        {myCourse.map((items: any, ind: Key) => {
          return (
            <div key={ind}>
              <Link
                href={`/my-course/${items?.slug}`}
                className=" hover:cursor-pointer mt-[10%] mx-auto"
              >
                <div className="border-b-[1px] border-solid border-[#e4e8eb] mt-[10px] w-[63rem] ">
                  <div className="flex justify-between my-[20px] ">
                    <img
                      src={items.image}
                      alt=""
                      className=" w-[240px] h-[135px] "
                    />
                    <div className=" ">
                      <p className="font-semibold">{items?.name} </p>
                      <p className="w-[40rem] sm ">{items.description}</p>
                      <span className="text-xs ">
                        Bởi {items?.createdBy?.name}
                      </span>
                      <div className="flex text-xs my-[5px] ">
                        <p>{items.totalRatings} sao </p>
                        <p className="ml-[10px] ">({items?.userRatings}) </p>
                      </div>
                      <ul className="flex list-disc text-xs ">
                        <li className="ml-[15px] ">
                          {" "}
                          Tổng số {items?.totalTimeCourse} phút{" "}
                        </li>
                        <li className="ml-[20px] ">
                          {" "}
                          {items?.totalLecture} bài giảng{" "}
                        </li>
                        <li className="ml-[20px] ">{items?.level}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MyCourses;
