"use client";
import {
  EnvironmentFilled,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import momo from "../../../public/logo-momo.webp";
import vnpay from "../../../public/logo-VNPAY.png";

function Footer() {
  return (
    <div className="bg-[#eee] px-[48px] py-[24px] mt-[30px] ">
      <div className="flex">
        <div>
          <Link href={""} className="block">
            {" "}
            Giới thiệu
          </Link>
          <Link href={""} className="block">
            {" "}
            Giảng dạy trên E-Learning
          </Link>
          <Link href={""} className="block">
            Blog
          </Link>
        </div>
        <div className="ml-[40px]  ">
          <h1 className="uppercase font-semibold text-xl mb-[15px] ">
            Phương thức thanh toán
          </h1>
          <div className="flex">
            <Image src={vnpay} alt={""} width={50} />
          </div>
        </div>
        <div className=" ml-[5rem] ">
          <div className="  ">
            <div className="flex  items-center  ">
              <PhoneOutlined className="text-[4rem] w-[8%] mr-[10px] " />
              <h3 className="w-[20%]  text-[16px] "> Liên hệ</h3>
              <h3 className="w-[38%]  text-[16px] "> 0987654321</h3>
            </div>
            <div className="flex items-center  ">
              <EnvironmentFilled className="text-[4rem] w-[8%] mr-[10px]  " />
              <h3 className="w-[25%]  text-[16px]">Địa chỉ</h3>
              <h3 className="w-[88%] text-[16px]">
                {" "}
                Công ty Cổ phần Giáo dục E-Learning
              </h3>
            </div>
            <div className="flex items-center ">
              <MailOutlined className="text-[4rem] w-[8%] mr-[10px] " />
              <h3 className="w-[20%]  text-[16px]">Email</h3>
              <h3 className="w-[50%] text-[16px] ">elearning@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30px] uppercase font-semibold  ">
        <h1>E-learning</h1>
      </div>
    </div>
  );
}

export default Footer;
