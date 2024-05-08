"use client";

import vnpay from "../../../public/logo-VNPAY.png";
import Image from "next/image";
import { paymentWithVNPAY } from "@/api/user";
import "./payment.css";
import { useRouter } from "next/navigation";

function PaymentWithVNPAY({ amount, orderId }: any) {
  const route = useRouter();
  const onFinish = () => {
    paymentWithVNPAY({
      amount: amount,
      orderId: orderId,
    }).then((res) => {
      const newUrl = res?.data?.vnpUrl;
      if (newUrl) {
        route.push(newUrl);
      }
    });
  };

  return (
    <>
      <div onClick={onFinish} className=" cursor-pointer">
        <Image src={vnpay} alt="" className="w-[100px] h-[100px] m-[10px] " />
        {/* Khi thanh toan thành công thì ở trang thanh toán thành công sẽ có một nút để chuyển hướng về trang chủ
        đồng thời trong nút đó sẽ gọi đến api getResponseCode() để thêm khóa học vào cho học viên  */}
      </div>
    </>
  );
}

export default PaymentWithVNPAY;
