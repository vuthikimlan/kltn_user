"use client";
import { getProfileUser } from "@/api/user";
import { Table, TableProps } from "antd";
import { useEffect, useState } from "react";

function OrderCompleted() {
  const [data, setData] = useState<any>();

  const handleGetProfile = () => {
    getProfileUser().then((res) => {
      setData(res?.data?.data?.order);
    });
  };
  useEffect(() => {
    handleGetProfile();
  }, []);

  const orderCompleted = data?.filter(
    (order: any) => order.status === "completed"
  );

  function formatDate(updateDay: any) {
    const date = new Date(updateDay);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  }

  const columns: TableProps["columns"] = [
    {
      dataIndex: "courses",
      key: "courses",
      render: (_, { courses }) => (
        //   {
        //   console.log(
        //     "courses",
        //     courses.map((course: any) => course.name)
        //   );
        //   return 1;
        // }
        <>{courses.map((course: any) => course.name)}</>
      ),
    },
    {
      title: "Ngày",
      dataIndex: "orderDate",
      key: "orderDate",
      render: (_, { orderDate }) => <>{formatDate(orderDate)}</>,
    },
    {
      title: "Tổng giá",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={orderCompleted} />
    </>
  );
}

export default OrderCompleted;
