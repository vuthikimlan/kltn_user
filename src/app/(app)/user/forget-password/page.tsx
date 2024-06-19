"use client";

import { forgotPasword } from "@/api/user";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

function ForgetPassword() {
  const route = useRouter();
  const onFinish = (values: string) => {
    forgotPasword(values).then((res) => {
      if (res?.status === 200) {
        message.success("Đã gửi email đặt lại mật khẩu!");
        route.push("/");
      } else {
        message.error("Gửi email đặt lại mật khẩu thất bại!");
      }
    });
  };
  return (
    <div className="w-[28%] mx-[auto] p-[30px] border-solid border-[1px]  shadow-xl mt-[7rem] mb-[12%] ">
      <h1 className=" text-2xl font-semibold text-center mb-[10px] ">
        Đặt lại mật khẩu
      </h1>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input
            className="input w-[100%] "
            prefix={<LockOutlined />}
            type="Email "
            placeholder="Email "
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className=" bg-[#fff] border-[#4096ff] text-xl rounded-none text-white font-semibold w-[100%] "
          >
            Đồng ý
          </Button>
          <Button
            type="link"
            className="button w-[100%]  "
            onClick={() => route.push("/")}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ForgetPassword;
