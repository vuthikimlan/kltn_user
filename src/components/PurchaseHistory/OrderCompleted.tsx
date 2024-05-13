"use client";
import { getProfileUser } from "@/api/user";
import { Table, TableProps } from "antd";
import { Key, useEffect, useState } from "react";

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
      title: "Khóa học",
      dataIndex: "price",
      key: "price",
      render: (_, { price }) => (
        <>
          {price.map((course: any, ind: Key) => (
            <ul key={ind}>
              <li>{course.name}</li>
            </ul>
          ))}
        </>
      ),
    },
    {
      title: "Chi phí",
      dataIndex: "price",
      key: "price",
      render: (_, { price }) => (
        <>
          {price.map((course: any, ind: Key) => (
            <ul key={ind}>
              <li>{course.price.toLocaleString("en")} VND </li>
            </ul>
          ))}
        </>
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
      render: (_, { totalPrice }) => <>{totalPrice.toLocaleString("en")} VND</>,
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={orderCompleted} />
    </>
  );
}

export default OrderCompleted;
