"use client";
import Link from "next/link";

function BecomeTeacher() {
  return (
    <div className=" ">
      <Link
        href={"/becomeTecher"}
        className=" border-[1px] border-solid border-black bg-black text-white p-[15px] text-lg hover:bg-[#3e4143] hover:border-[#3e4143]  "
      >
        Bắt đầu dạy học ngay hôm nay
      </Link>
    </div>
  );
}

export default BecomeTeacher;
