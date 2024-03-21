import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { TeamOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const MenuInstructor: React.FC = () => {
  const items: MenuItem[] = [
    getItem("Quản lý người dùng", "sub1", <TeamOutlined />, [
      getItem("Quản lý học viên", "student"),
    ]),
    getItem("Quản lý khóa học", "course"),
  ];
  return (
    <div className="leading-[200px]">
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        // onClick={(e) => navigate(`${e.key}`)}
      />
    </div>
  );
};

export default MenuInstructor;
