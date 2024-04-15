/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import emptyCart from "../../../public/empty-shopping-cart-v2.jpg";
import Image from "next/image";
import { Button, Skeleton } from "antd";
import "./style.css";
import { getCart } from "@/api/user";
import { Key, useEffect, useState } from "react";
import ButtonPayment from "../Button/Payment";
import DeleteCart from "../Button/DeleteCart";

function MyCart() {
  const [count, setCount] = useState();
  const [data, setData] = useState([]);
  const handleGetCart = () => {
    getCart().then((res) => {
      setData(res?.data?.data?.items?.shoppingCart);
      setCount(res?.data?.data?.count);
    });
  };

  useEffect(() => {
    handleGetCart();
  }, []);

  const handleTotalPrice = (cart: any) => {
    const total = cart.reduce((total: any, course: any) => {
      const price = course?.courseId?.discountedPrice
        ? course?.courseId?.discountedPrice
        : course?.courseId?.price;
      return total + price;
    }, 0);

    return total;
  };

  return (
    <>
      {count === 0 ? (
        <>
          <div className="mt-[32px]">
            <p className="font-semibold">0 khóa học trong giỏ hàng</p>
            Thay số lượng bằng số lấy được trong giỏ hàng
            <div className="border-[1px] border-solid border-[#e4e8eb] py-[20px]  text-center mt-[10px] ">
              <Image src={emptyCart} alt="" className="w-[20%] m-[auto] " />
              <p className="mb-[25px] text-sm">
                Giỏ hàng của bạn đang trống. Hãy tiếp tục mua sắm để tìm kiếm
                một khóa học
              </p>
              <Link
                href={"/home"}
                className="border-[1px] border-solid border-[#a435f0] bg-[#a435f0] text-[#fff] py-[10px] px-[10px]  "
              >
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-[32px]">
          <p className="font-semibold">{`${count} khóa học trong giỏ hàng`}</p>
          <div className="flex ">
            <div>
              {data?.map((el: any, ind: Key) => {
                return (
                  <div
                    key={ind}
                    className="border-t-[1px] border-solid border-[#e4e8eb] mt-[10px] w-[100%] "
                  >
                    <div className=" flex justify-between mt-[15px] ">
                      <img
                        src={el?.courseId?.image}
                        alt=""
                        className=" w-[150px] h-[100px] "
                      />
                      <div className=" ml-[12px] ">
                        <p>{el?.courseId?.name} </p>
                        <span className="text-xs ">{`Bởi ${el?.courseId?.createdBy?.name} `}</span>
                        <div className="flex text-xs my-[5px] ">
                          <p>{`${el?.courseId?.totalRatings} sao `}</p>
                          <p className="ml-[10px] ">{`${el?.courseId?.userRatings} xếp hạng `}</p>
                        </div>
                        <ul className="flex list-disc text-xs ">
                          <li className="ml-[15px] "> Tổng số 28 giờ </li>
                          <li className="ml-[20px] ">
                            {" "}
                            {`${el?.courseId?.totalLecture} bài giảng  `}
                          </li>
                          <li className="ml-[20px] ">{el?.courseId?.level}</li>
                        </ul>
                      </div>
                      <DeleteCart
                        courseId={el?.courseId?._id}
                        handleGetCart={handleGetCart}
                      />
                      {el?.courseId?.discountedPrice > 0 ? (
                        <>
                          <div>
                            <p className="font-medium text-base ">
                              {(el?.courseId?.discountedPrice).toLocaleString(
                                "en"
                              )}{" "}
                              VND
                            </p>
                            <p className="font-normal text-base text-[#6a6f73] line-through ">
                              {(el?.courseId?.price).toLocaleString("en")} VND
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className="mt-[12px]">
                            {(el?.courseId?.price).toLocaleString("en")} VND
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[30%] ml-[50px] ">
              <div className="ml-[10%] pb-[20px] ">
                <p className="text-[#6a6f73] font-medium ">Tổng: </p>
                <p className="mb-[10px] text-2xl font-semibold ">
                  {handleTotalPrice(data).toLocaleString("en")} VND
                </p>
                <ButtonPayment />
              </div>
              <div className="border-t-[1px] border-solid border-[#e4e8eb] ml-[10%] ">
                <p className=" mt-[15px] mb-[10px] font-semibold ">
                  Khuyến mãi
                </p>
                {(data as any)?.map((el: any, ind: Key) => {
                  if (el?.courseId?.discountedPrice !== 0) {
                    return (
                      <div key={ind}>
                        <div className=" border-[1px] border-[#e4e8eb] border-dashed text-xs p-[8px] mb-[10px] ">
                          <p>
                            {" "}
                            Đã áp dụng{" "}
                            <strong>
                              {el?.courseId?.discountedCodeApplied}
                            </strong>{" "}
                          </p>
                          <p>Coupon của E-Learning</p>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyCart;
