"use client";
import { Button } from "antd";
import Link from "next/link";

function BecomeTeacher() {
  return (
    <div className=" ">
      {/* <Button className="bg-black border-black rounded-none text-white font-semibold  ">
        Bắt đầu dạy học ngay hôm nay
      </Button> */}
      <Link
        href={""}
        className=" border-[1px] border-solid border-black bg-black text-white p-[15px] text-lg hover:bg-[#3e4143] hover:border-[#3e4143]  "
      >
        Bắt đầu dạy học ngay hôm nay
      </Link>
    </div>
  );
}

export default BecomeTeacher;
