/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
import StudentWatch from "@/components/Course/StudentWatch";
import teacher from "../../../public/becometeacher.jpg";
import Image from "next/image";
import BecomeTeacher from "@/components/Button/BecomeTeacher";
import TopicsOutstanding from "@/components/Category/TopicOutstanding";

export default function Home() {
  return (
    <>
      <div className="mx-[10%]">
        <Banner />
      </div>
      <div className=" mt-[5rem] bg-[#f7f9fa]  ">
        <div className=" w-[50%] m-auto p-[64px] ">
          <p className=" text-[#6a6f73] text-center  mb-[24px] text-xl ">
            Được hơn 1000 công ty và hàng triệu học viên trên khắp Việt Nam tin
            dùng
          </p>
          <div className=" flex justify-center grid-cols-9 gap-[6rem] p-[20px] ">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
              alt="volkswagen"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
              alt="samsung"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
              alt="cisco"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
              alt="att"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
              alt="procter_gamble"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
              alt=""
            />
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
              alt=""
            />
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mx-[10%]">
        <div className="mt-[65px] mb-[16px]">
          <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold ">
            Tuyển tập khóa học rộng lớn
          </h1>
          <p className="text-[#2d2f31] font-sans mt-[16px] text-xl w-[62%] ">
            Lựa chọn trong số hơn 1000 khóa học video online với nhiều nội dung
            bổ sung mới được xuất bản hàng tháng
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
      </div>
      <div className="mt-[5rem] bg-[#f7f9fa] p-[64px] ">
        <div className=" w-[80%] m-auto  ">
          <p className="text-[#2d2f31] text-2xl font-semibold mb-[24px]">
            Chủ đề theo thể loại
          </p>
          <TopicsOutstanding />{" "}
        </div>
      </div>
      <div className="mx-[10%]">
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
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <Payment /> */
}
