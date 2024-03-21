"use client";
import { Button } from "antd";
import Link from "next/link";

function ButtonForgetPass() {
  return (
    <>
      <Link
        href="/"
        className=" pt-[20px] text-base border-b-[1px] border-[#4096ff]  "
      >
        Quên mật khẩu
      </Link>
    </>
  );
}

export default ButtonForgetPass;
