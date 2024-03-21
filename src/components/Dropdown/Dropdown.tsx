"use client";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { isLogin } from "@/store/appSlice";
import Link from "next/link";

function DropdownUser() {
  const route = useRouter();
  const dispatch = useDispatch();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={"/my-course"}>Khóa học của tôi</Link>,
    },
    {
      key: "2",
      label: "Hồ sơ",
    },
    {
      key: "3",
      label: "Giỏ hàng của tôi",
    },
    {
      key: "4",
      label: "Đăng xuất",
      onClick: () => {
        route.replace("/");
        dispatch(isLogin(false));
        Cookies.remove("token");
      },
    },
  ];
  return (
    <>
      <Dropdown menu={{ items }}>
        <Avatar size="large" icon={<UserOutlined />} />
      </Dropdown>
    </>
  );
}

export default DropdownUser;
