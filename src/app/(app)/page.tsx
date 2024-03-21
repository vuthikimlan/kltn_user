/* eslint-disable react/jsx-no-undef */
import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
import StudentWatch from "@/components/Course/StudentWatch";
import teacher from "../../../public/becometeacher.jpg";
import Image from "next/image";
import BecomeTeacher from "@/components/Button/BecomeTeacher";

import Payment from "@/components/Payment/Payment";

export default function Home() {
  return (
    <div className="mx-[10%]">
      <Banner />
      <div className="mt-[65px] mb-[16px]">
        <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold ">
          Tuyển tập khóa học rộng lớn
        </h1>
        <p className="text-[#2d2f31] font-sans mt-[16px] text-xl w-[62%] ">
          Lựa chọn trong số hơn 1000 khóa học video online với nhiều nội dung bổ
          sung mới được xuất bản hàng tháng
        </p>
      </div>
      <div className="mt-[4rem]">
        <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] ">
          Học viên đang xem
        </h1>
        <StudentWatch />
      </div>
      <div className="mt-[50px]">
        <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[24px]">
          Các thể loại hàng đầu
        </h1>
        <Category />
      </div>
      <div className="flex m-[auto] w-[66%] py-[7%] ">
        <Image
          src={teacher}
          className="w-[400px] h-[400px] object-cover"
          alt="Picture of the author"
        />
        <div className="ml-[8%] mt-[5%] ">
          <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold mb-[16px] ">
            Trở thành giảng viên
          </h1>
          <p className="w-full mt-[10px] mb-[30px] text-[#2d2f31] font-sans text-xl  ">
            Giảng viên trên khắp Việt Nam giảng dạy hàng triệu học viên trên
            E-learning. Chúng tôi cung cấp công cụ và kỹ năng để dạy những gì
            bạn yêu thích.
          </p>
          <BecomeTeacher />
          {/* <Payment /> */}
        </div>
      </div>
    </div>
  );
}

{
  /* <Payment /> */
}
