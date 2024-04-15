"use client";
import { resetPasword } from "@/api/user";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

function PageResetPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const route = useRouter();

  const onFinish = (values: string) => {
    resetPasword(token, values).then((res) => {
      if (res?.status === 200) {
        message.success("Mật khẩu đã được đặt lại thành công!");
        Cookies.remove("jwt");
        route.push("/");
      } else {
        message.error("Đặt lạ mật khẩu thất bại:");
      }
    });
  };
  return (
    <div className="w-[28%] m-[auto] pt-[10rem]">
      <h1 className=" text-2xl font-semibold text-center mb-[10px] ">
        Đặt lại mật khẩu
      </h1>
      <Form onFinish={onFinish}>
        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Mật khẩu phải tối thiểu 6 - 20 ký tự ",
            },
          ]}
        >
          <Input.Password
            className="input w-[100%] "
            prefix={<LockOutlined />}
            type="Mật khẩu "
            placeholder="Mật khẩu "
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Mật khẩu phải tối thiểu 6 - 20 ký tự ",
            },
          ]}
        >
          <Input.Password
            className="input w-[100%] "
            prefix={<LockOutlined />}
            type="Xác nhận mật khẩu "
            placeholder="Xác nhận mật khẩu "
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className=" bg-[#fff] border-[#4096ff] text-[#4096ff] text-xl rounded-none text-white font-semibold w-[100%] "
          >
            Xác nhận mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default PageResetPassword;
