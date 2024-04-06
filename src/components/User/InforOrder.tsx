/* eslint-disable @next/next/no-img-element */
"use client";

import { getOrder } from "@/api/user";
import { RootState } from "@/store/store";
import { Button, Skeleton } from "antd";
import { Key, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaymentWithVNPAY from "../Button/PaymentVNPAY";
import PaymentWithMomo from "../Button/PaymentMomo";
import CancelPayment from "../Button/CancelPayment";

function InforOrder() {
  const inforOrder = useSelector((state: RootState) => state.app.inforOrder);
  const orderId = (inforOrder as any)?._id;
  const [order, setOrder] = useState();
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

  // console.log("inforOrder", inforOrder);
  // console.log("orderId", orderId);
  // console.log("order", orderId);

  const course = (order as any)?.courses;

  return (
    <div className=" py-[40px] w-[70%] mx-[auto] flex ">
      <div className="w-[55%] mr-[50px] border-[1px] border-solid border-[#d1d7dc] py-[40px] px-[10px] rounded-[40px] shadow-xl  ">
        <h1 className="mb-[40px]  text-xl font-semibold  text-center  ">
          Thông tin đặt hàng
        </h1>
        <div>
          <div className="border-b-[1px] border-solid border-[#d1d7dc] pb-10px mb-[20px] ">
            {course.map((el: any, ind: Key) => {
              return (
                <div key={ind} className="flex  my-[10px] justify-between ">
                  <div className="flex  ">
                    <img
                      src={el?.course?.image}
                      alt=""
                      className="w-[50px] h-[50px] "
                    />
                    <p className="ml-[10px]">{el?.name} </p>
                  </div>
                  <p>₫ {el?.price} </p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between">
            <p>Tổng: </p>
            <p>₫{(order as any)?.totalPrice} </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-[40px] text-center ">
          Phương thức thanh toán
        </h1>
        <div className="flex ">
          <PaymentWithVNPAY
            amount={(order as any)?.totalPrice}
            orderId={orderId}
          />
          <PaymentWithMomo />
        </div>
        <div className=" relative top-[2rem] left-[8rem] ">
          <CancelPayment orderId={orderId} />
        </div>
      </div>
    </div>
  );
}

export default InforOrder;
