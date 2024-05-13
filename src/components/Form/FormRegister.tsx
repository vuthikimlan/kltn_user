"use client";

import { register } from "@/api/auth";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { ProFormSelect } from "@ant-design/pro-components";
import { Button, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";

interface DataType {
  name: string;
  username: string;
  password: string;
  email: string;
  role: string;
}

function FormRegister() {
  const router = useRouter();

  const onFinish = (values: DataType) => {
    register(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Đăng ký tài khoản thành công");
        router.push("/login");
      }
    });
  };
  return (
    <div className="w-[28%] m-[auto] p-[30px] border-solid border-[1px]  shadow-xl mt-[7rem]">
      <h1 className="text-lg font-semibold mb-[20px] w-[70%] m-[auto] text-center ">
        Đăng ký và bắt đầu học
      </h1>
      <Form onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: " Vui lòng nhập họ và tên",
            },
          ]}
        >
          <Input
            className="input w-[74%]  "
            prefix={<UserOutlined />}
            placeholder="Họ và tên"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Tên tài khoản tối thiểu 6 ký tự",
            },
          ]}
        >
          <Input
            className="input w-[74%]  "
            prefix={<UserOutlined />}
            placeholder="Tên tài khoản"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Mật khẩu phải tối thiểu 6 - 20 ký tự ",
            },
          ]}
        >
          <Input.Password
            className="input w-[74%] "
            prefix={<LockOutlined />}
            type="Mật khẩu"
            placeholder="Mật khẩu"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Định dạng email không hợp lệ",
            },
            {
              required: true,
              message: "Vui lòng nhập Email",
            },
          ]}
        >
          <Input
            size="large"
            className="input w-[74%] "
            prefix={<MailOutlined className="site-form-item-icon mr-5" />}
            placeholder="Email"
          />
        </Form.Item>
        <h1 className="text-lg font-semibold mb-[10px] ">
          Bạn muốn trở thành giảng viên hay học viên
        </h1>
        <Form.Item>
          <ProFormSelect
            name="role"
            className="input h-[40px] w-[74%] "
            width={465}
            placeholder="Vai trò"
            options={[
              { label: "Học Viên", value: "STUDENT" },
              { label: "Giảng viên", value: "TEACHER" },
            ]}
            rules={[{ required: true, message: "Vui lòng chọn vai trò" }]}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "465px" }}
            className="button bg-[#fff] border-[#4096ff] text-xl rounded-none text-white font-semibold w-[74%] "
          >
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormRegister;
