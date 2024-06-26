"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import "./style.css";
import ButtonForgetPass from "../Button/ForgetPassword";
import { login } from "@/api/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { countCart, isLogin } from "@/store/appSlice";

interface DataType {
  username: string;
  password: string;
}

function FormLogin() {
  const route = useRouter();
  const dispatch = useDispatch();

  const onFinish = (values: DataType) => {
    login(values).then((res) => {
      if (res?.data?.success === true) {
        dispatch(isLogin(true));
        const checkRole = res?.data?.data?.role;
        if (checkRole === "STUDENT") {
          Cookies.set("jwt", res?.data?.data?.token);
          Cookies.set("idUser", res?.data?.data?._id);
          dispatch(countCart(res?.data?.data?.countCourseCart));
          route.push("/home");
          message.success("Đăng nhập thành công");
        }
      } else if (res?.data?.success === false) {
        message.error(res?.data?.error?.message);
      }
    });
  };

  return (
    <div className="w-[28%] m-[auto] p-[30px] border-solid border-[1px]  shadow-xl mt-[7rem] ">
      <h1 className="text-lg font-semibold mb-[20px] text-center ">
        Đăng nhập vào tài khoản E-Learning của bạn
      </h1>
      <Form onFinish={onFinish}>
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className=" bg-[#fff] border-[#4096ff] text-[#4096ff] text-xl rounded-none text-white font-semibold w-[100%] "
          >
            Đăng nhập
          </Button>
          <div className="mt-[10px] text-[#4096ff] w-[29%] mx-[auto]  ">
            <ButtonForgetPass />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormLogin;
