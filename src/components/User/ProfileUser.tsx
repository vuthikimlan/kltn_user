"use client";

import { getProfileUser } from "@/api/user";
import { profileUser } from "@/store/appSlice";
import { Image } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function ProfileUser() {
  const [data, setData] = useState<any>();
  const dispatch = useDispatch();
  const handleGetProfile = () => {
    getProfileUser().then((res) => {
      setData(res?.data?.data);
    });
  };
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
                src={data?.avatar}
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
                  {data?.name}
                </p>
              </div>
              <div className="mb-[1rem]">
                <p className="mx-[4rem]">Tên tài khoản: </p>
                <p className="border-solid border-[1px]  border-neutral-600 px-[2rem] py-[1rem] mt-[1rem] mx-[4rem] ">
                  {data?.username}
                </p>
              </div>
              <div className="mb-[1rem]">
                <p className="mx-[4rem]">Email: </p>
                <p className="border-solid border-[1px]  border-neutral-600 px-[2rem] py-[1rem] mt-[1rem] mx-[4rem] ">
                  {data?.email}
                </p>
              </div>
              <div className="mb-[1rem]">
                <p className="mx-[4rem]">Số điện thoại: </p>
                <p className="border-solid border-[1px]  border-neutral-600 px-[2rem] py-[1rem] mt-[1rem] mx-[4rem] ">
                  {data?.phone}
                </p>
              </div>
            </div>
            <div className="flex justify-end mb-[10px] mr-[4rem]  ">
              <Link
                className="border-black bg-black border-solid hover:bg-[#3e4143] hover:border-[#3e4143] px-[5rem] text-white py-[6px] "
                href="/user/edit-profile"
                onClick={() => {
                  dispatch(profileUser(data));
                }}
              >
                Chỉnh sửa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileUser;
