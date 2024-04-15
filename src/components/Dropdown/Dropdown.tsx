"use client";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
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
      label: <Link href={"/user"}>Hồ sơ</Link>,
    },
    {
      key: "3",
      label: <Link href={"/cart"}>Giỏ hàng của tôi</Link>,
    },
    {
      key: "4",
      label: <Link href={"/purchase-history"}>Lịch sử mua</Link>,
    },
    {
      key: "5",
      label: "Đăng xuất",
      onClick: () => {
        route.replace("/");
        dispatch(isLogin(false));
        Cookies.remove("jwt");
        Cookies.remove("cartCount");
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
