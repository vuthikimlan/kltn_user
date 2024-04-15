"use client";

import { ProForm, ProFormText, FormInstance } from "@ant-design/pro-components";
import ButtonUpload from "../Button/ButtonUpload";
import { useEffect, useRef, useState } from "react";
import { Button, message } from "antd";
import Link from "next/link";
import { getProfileUser, updateProfile } from "@/api/user";
import { useRouter } from "next/navigation";

function EditProfile() {
  const formRef = useRef<FormInstance>();
  const [data, setData] = useState<any>({});
  const route = useRouter();
  const handleGetProfile = () => {
    getProfileUser().then((res) => {
      setData(res?.data?.data);
    });
  };
  useEffect(() => {
    handleGetProfile();
  }, []);

  const handleUpdateProfile = (values: any) => {
    updateProfile(values).then((res) => {
      if (res?.data?.success) {
        message.success("Cập nhật thông tin thành công");
        handleGetProfile();
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
        <ProForm
          submitter={false}
          layout="vertical"
          initialValues={data}
          onFinish={async (values: any) => {
            handleUpdateProfile(values);
          }}
          formRef={formRef}
        >
          <ProForm.Group>
            <ButtonUpload
              name="avatar"
              initialValue={data?.avatar}
              label="Avatar"
            />
          </ProForm.Group>

          <ProForm.Group>
            <ProFormText
              className="w-[100%] hover:border-[#FB9400] "
              //   initialValue="Nguyen Van A"
              width="lg"
              name="name"
              label="Họ và tên"
              placeholder="Nhập họ và tên"
              //   rules={[
              //     {
              //       required: true,
              //       message: "Vui lòng nhập họ và tên",
              //     },
              //   ]}
            />
            <ProFormText
              className="w-[100%] hover:border-[#FB9400] "
              width="lg"
              name="email"
              label="E-mail"
              placeholder="E-mail"
              //   rules={[
              //     {
              //       type: "email",
              //       message: "E-mail không hợp lệ",
              //     },
              //     {
              //       required: true,
              //       message: "Vui lòng nhập E-mail của bạn",
              //     },
              //   ]}
            />
            <ProFormText
              className="w-[100%] hover:border-[#FB9400] "
              width="lg"
              name="phone"
              label="Số điện thoại:"
              placeholder="Số điện thoại"
              //   rules={[
              //     {
              //       required: true,
              //       message: "Vui lòng nhập Số điện thoại ",
              //     },
              //     {
              //       pattern: /^[0-9]{10,}$/,
              //       message: "Số điện thoại không hợp lệ!",
              //     },
              //   ]}
            />
          </ProForm.Group>
          <div className=" relative left-[19.5rem] ">
            <Link href="/user" className="mr-[10px] ">
              Hủy{" "}
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className=" bg-black hover:bg-[#3e4143]"
            >
              Cập nhật
            </Button>
          </div>
        </ProForm>
      </div>
    </div>
  );
}

export default EditProfile;
