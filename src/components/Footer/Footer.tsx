"use client";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import momo from "../../../public/logo-momo.webp";
import vnpay from "../../../public/logo-VNPAY.png";

function Footer() {
  return (
    <div className="bg-[#eee] px-[48px] py-[24px] ">
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
            <Image src={momo} alt={""} width={50} className="mr-[20px] " />
            <Image src={vnpay} alt={""} width={50} />
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
