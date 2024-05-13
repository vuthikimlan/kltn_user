"use client";
import { getProfileUser } from "@/api/user";
import { Table, TableProps } from "antd";
import { Key, useEffect, useState } from "react";

function OrderCancelled() {
  const [data, setData] = useState<any>();

  const handleGetProfile = () => {
    getProfileUser().then((res) => {
      setData(res?.data?.data?.order);
    });
  };
  useEffect(() => {
    handleGetProfile();
  }, []);

  const orderCancelled = data?.filter(
    (order: any) => order.status === "cancelled"
  );
  function formatDate(updateDay: any) {
    const date = new Date(updateDay);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  }

  const columns: TableProps["columns"] = [
    // {
    //   dataIndex: "courses",
    //   key: "courses",
    //   render: (_, { courses }) => (
    //     //   {
    //     //   console.log(
    //     //     "courses",
    //     //     courses.map((course: any) => course.name)
    //     //   );
    //     //   return 1;
    //     // }
    //     <>{courses.map((course: any) => course.name)}</>
    //   ),
    // },
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
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={orderCancelled} />
    </>
  );
}

export default OrderCancelled;
