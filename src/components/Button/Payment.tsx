"use client";

import { creatOrder } from "@/api/user";
import { inforOrder } from "@/store/appSlice";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function ButtonPayment() {
  const dispatch = useDispatch();
  const route = useRouter();
  const handleCreateOrder = () => {
    creatOrder().then((res) => {
      const data = res?.data?.data;
      dispatch(inforOrder(data));
    });
  };
  return (
    <>
      <Button
        onClick={() => {
          route.push("/payment");
          handleCreateOrder();
        }}
        type="primary"
        className="rounded-none border-solid border-[1px] border-[#4096ff] w-[100%] "
      >
        Thanh toán
      </Button>
    </>
  );
}

export default ButtonPayment;
