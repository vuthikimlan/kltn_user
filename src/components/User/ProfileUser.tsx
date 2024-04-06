"use client";

import { getProfileUser } from "@/api/user";
import { Image } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

function ProfileUser() {
  const [data, setData] = useState();
  const handleGetProfile = () => {
    getProfileUser().then((res) => {
      setData(res?.data?.data);
    });
  };
  const user = data as any;

  useEffect(() => {
    handleGetProfile();
  }, []);

  return (
    <>
      <div className="mx-[auto] my-[45px] w-[50rem] ">
        <div className="mx-[10%]">
          <h1 className="mb-[5px] text-2xl font-bold text-center">Hồ sơ </h1>
          <div className="  m-[auto] bg-white border-2 border-solid border-[#808080/40]">
            <div className="grid gap-12 tablet:grid-cols-3  phone:grid-cols-1 flex-row items-center justify-evenly mx-[10rem] my-[10px] ">
              <Image
                src={user?.avatar}
                alt="avatar"
                height={150}
                width={150}
                className="col-span-1 phone:mx-auto my-[10px] "
              />
            </div>
            <div className="mt-10px">
              <div className="mb-[1rem] ">
                <p className="mx-[4rem]">Họ và tên: </p>
                <p className="border-solid border-[1px]  border-neutral-600 px-[2rem] py-[1rem] mt-[1rem] mx-[4rem] ">
                  {user?.name}
                </p>
              </div>
              <div className="mb-[1rem]">
                <p className="mx-[4rem]">Tên tài khoản: </p>
                <p className="border-solid border-[1px]  border-neutral-600 px-[2rem] py-[1rem] mt-[1rem] mx-[4rem] ">
                  {user?.username}
                </p>
              </div>
              <div className="mb-[1rem]">
                <p className="mx-[4rem]">Email: </p>
                <p className="border-solid border-[1px]  border-neutral-600 px-[2rem] py-[1rem] mt-[1rem] mx-[4rem] ">
                  {user?.email}
                </p>
              </div>
              <div className="mb-[1rem]">
                <p className="mx-[4rem]">Số điện thoại: </p>
                <p className="border-solid border-[1px]  border-neutral-600 px-[2rem] py-[1rem] mt-[1rem] mx-[4rem] ">
                  {user?.phone}
                </p>
              </div>
            </div>
            {/* <div className="flex justify-end m-[10rem]  ">
                <Link
                  className="bg-[#FB9400] hover:opacity-80 px-[5rem] border-solid	 text-white py-[6px] "
                  href="/user/edit-profile"
                >
                  Chỉnh sửa
                </Link>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileUser;
