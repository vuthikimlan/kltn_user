"use client";
import { getProfileUser } from "@/api/user";
import Link from "next/link";
import { Key, useEffect, useState } from "react";

function JoiningCourse() {
  const [myCourse, setMyCourse] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getProfileUser().then((res) => {
      setMyCourse(res?.data?.data?.boughtCourses);
      setName(res?.data?.data?.name);
    });
  }, []);
  return (
    <div className="mt-[50px] mx-[10%]">
      <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold ">
        {name} ơi, hãy bắt đầu học nào
      </h1>
      <div className=" flex ">
        {myCourse.map((items: any, ind: Key) => {
          return (
            <div key={ind}>
              <Link
                href={`/my-course/${items?.slug}`}
                className=" hover:cursor-pointer mt-[10%] mx-auto"
              >
                <div className="border-[1px] border-solid border-[#e4e8eb] mt-[10px] mr-[15px] w-[30rem] ">
                  <div className="flex m-[20px] ">
                    <img
                      src={items.image}
                      alt=""
                      className=" w-[150px] h-[90px] "
                    />
                    <div className=" ml-[10px] ">
                      <p className="font-semibold">{items?.name} </p>
                      <span className="text-xs ">
                        Bởi {items?.createdBy?.name}
                      </span>

                      <ul className="flex list-disc text-xs ">
                        <li className="ml-[15px] ">
                          {" "}
                          Tổng số {items?.totalTimeCourse} phút{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JoiningCourse;
