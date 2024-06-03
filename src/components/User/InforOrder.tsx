/* eslint-disable @next/next/no-img-element */
"use client";

import { getOrder } from "@/api/user";
import { Skeleton } from "antd";
import { Key, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaymentWithVNPAY from "../Button/PaymentVNPAY";
import CancelPayment from "../Button/CancelPayment";

function InforOrder() {
  const inforOrder = useSelector((state: any) => state.app.inforOrder);
  const orderId = inforOrder?._id;
  const [order, setOrder] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrder(orderId)
      .then((res) => {
        setOrder(res?.data?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  // Nếu inforOrder không có dữ liệu thì sẽ hiển thị loading
  if (loading || !inforOrder) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }

  const course = order?.courses;

  return (
    <div className=" py-[40px] w-[70%] mx-[auto] flex mb-[7rem] ">
      <div className="w-[55%] mr-[50px] border-[1px] border-solid border-[#d1d7dc] py-[40px] px-[10px] rounded-[40px] shadow-xl  ">
        <h1 className="mb-[40px]  text-xl font-semibold  text-center  ">
          Thông tin đặt hàng
        </h1>
        <div>
          <div className="border-b-[1px] border-solid border-[#d1d7dc] pb-10px mb-[20px] ">
            {course.map((el: any, ind: Key) => {
              console.log("el", el);

              return (
                <div key={ind} className="flex  my-[10px] justify-between ">
                  <div className="flex  ">
                    <img
                      src={el?.image}
                      alt=""
                      className="w-[50px] h-[50px] "
                    />
                    <p className="ml-[10px]">{el?.name} </p>
                  </div>
                  {el.discountedPrice > 0 ? (
                    <>
                      <div className=" flex">
                        <p className="font-medium text-base ">
                          ₫ {el.discountedPrice.toLocaleString("en")}{" "}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="font-medium text-base ">
                        ₫ {el.price.toLocaleString("en")}{" "}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between">
            <p>Tổng: </p>
            <p>₫{(order?.totalPrice).toLocaleString("en")} </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-[40px] text-center ">
          Phương thức thanh toán
        </h1>
        <div className="flex ">
          <PaymentWithVNPAY amount={order?.totalPrice} orderId={orderId} />
        </div>
        <div className=" relative top-[2rem] left-[8rem] ">
          <CancelPayment orderId={orderId} />
        </div>
      </div>
    </div>
  );
}

export default InforOrder;
