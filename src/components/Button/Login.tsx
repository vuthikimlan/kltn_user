"use client";
import { Button } from "antd";
import Link from "next/link";

function ButtonLogin() {
  return (
    <>
      <Link
        href="/login"
        className="border-[1px] border-solid border-black bg-white text-black p-[8px] text-base hover:bg-slate-200 mr-[10px] "
      >
        Đăng Nhập
      </Link>
    </>
  );
}

export default ButtonLogin;
