"use client";
import { Button } from "antd";
import Link from "next/link";

function ButtonRegister() {
  return (
    <>
      <Link
        href="/register"
        className="border-[1px] border-solid border-black bg-black text-white p-[8px] text-base hover:bg-[#3e4143] hover:border-[#3e4143] "
      >
        Đăng ký
      </Link>
    </>
  );
}

export default ButtonRegister;
