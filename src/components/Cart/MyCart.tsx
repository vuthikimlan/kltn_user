import Link from "next/link";
import emptyCart from "../../../public/empty-shopping-cart-v2.jpg";
import Image from "next/image";
import { Button } from "antd";
import "./style.css";

function MyCart() {
  // Nếu số lượng khóa học bằng 0 thì sẽ chạy đoạn code trên này
  //   return (
  //     <div className="mt-[32px]">
  //       <p className="font-semibold">0 khóa học trong giỏ hàng</p>
  //       Thay số lượng bằng số lấy được trong giỏ hàng
  //       <div className="border-[1px] border-solid border-[#e4e8eb] py-[20px]  text-center mt-[10px] ">
  //         <Image src={emptyCart} alt="" className="w-[20%] m-[auto] " />
  //         <p className="mb-[25px] text-sm">
  //           Giỏ hàng của bạn đang trống. Hãy tiếp tục mua sắm để tìm kiếm một khóa
  //           học
  //         </p>
  //         <Link
  //           href={"/home"}
  //           className="border-[1px] border-solid border-[#a435f0] bg-[#a435f0] text-[#fff] py-[10px] px-[10px]  "
  //         >
  //           Tiếp tục mua sắm
  //         </Link>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="mt-[32px]">
      <p className="font-semibold">1 khóa học trong giỏ hàng</p>
      <div className="flex ">
        <div className="border-t-[1px] border-solid border-[#e4e8eb] mt-[10px] w-[55%] ">
          <div className="flex justify-between">
            <Image src={emptyCart} width={100} height={100} alt="" />
            <div className="mt-[12px] ">
              <p>Tên khóa học </p>
              <span className="text-xs ">Bởi tác giả</span>
              <div className="flex text-xs my-[5px] ">
                <p>4,9 sao</p>
                <p className="ml-[10px] ">(208 xếp hạng) </p>
              </div>
              <ul className="flex list-disc text-xs ">
                <li className="ml-[15px] "> Tổng số 28 giờ </li>
                <li className="ml-[20px] "> 191 bài giảng </li>
                <li className="ml-[20px] ">Trình độ</li>
              </ul>
            </div>
            <Button type="link">Xóa</Button>
            <p className="mt-[12px]">1.987.230 VND</p>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="ml-[10%] border-b-[1px] border-solid border-[#e4e8eb] pb-[20px] ">
            <p className="text-[#6a6f73] font-medium ">Tổng: </p>
            <p className="mb-[10px] text-2xl font-semibold ">1.987.230 VND</p>
            <Button
              type="primary"
              className="rounded-none border-solid border-[1px] border-[#4096ff] w-[100%] "
            >
              Thanh toán
            </Button>
          </div>

          <p className="ml-[10%] mt-[15px] mb-[10px] font-semibold ">
            Khuyến mãi
          </p>
          <div className="ml-[10%] border-[1px] border-[#e4e8eb] border-dashed text-xs p-[8px] ">
            <p>
              {" "}
              Đã áp dụng <strong>XAKHO</strong>{" "}
            </p>
            <p>Coupon của E-Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
