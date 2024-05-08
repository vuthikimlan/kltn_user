"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { getProfileUser, updateProfile } from "@/api/user";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function EditProfile() {
  const route = useRouter();
  const user = useSelector((state: any) => state.app.profileUser);

  const handleUpdateProfile = (values: any) => {
    updateProfile(values).then((res) => {
      if (res?.data?.success) {
        message.success("Cập nhật thông tin thành công");
        route.push("/user");
      } else {
        message.error("Cập nhật thông tin không thành công");
      }
    });
  };

  return (
    <div className="w-[40%] mx-[auto] my-[5rem] ">
      <h1 className="text-center text-2xl font-semibold ">
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className=" my-[2rem] border-[1px] border-solid px-[70px] py-[30px] ">
        <Form
          layout="vertical"
          initialValues={user}
          onFinish={async (values: any) => {
            handleUpdateProfile(values);
          }}
        >
          <Form.Item
            name="name"
            label="Họ và tên"
            initialValue={user?.name}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ và tên",
              },
            ]}
          >
            <Input
              className="input w-[74%]  "
              placeholder="Họ và tên"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập E-mail của bạn",
              },
              {
                type: "email",
                message: "E-mail không hợp lệ",
              },
            ]}
          >
            <Input
              className="input w-[74%] "
              type="email"
              placeholder="email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại:"
            initialValue={user?.phone}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại ",
              },
            ]}
          >
            <Input
              className="input w-[74%]  "
              placeholder="Số điện thoại"
              size="large"
            />
          </Form.Item>
          <div className=" ml-[29.5rem] ">
            <Form.Item>
              <Link href="/user" className="mr-[10px] ">
                Hủy{" "}
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                className=" bg-[#fff] border-[#4096ff] text-xl rounded-none text-white font-semibold  "
              >
                Cập nhật
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditProfile;
