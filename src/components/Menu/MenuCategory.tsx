import { Menu, MenuProps } from "antd";

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

function MenuCategory() {
  const items: MenuProps["items"] = [
    getItem("Phát triển", 1, null, [
      getItem("Phát triển web", "sub1"),
      getItem("Khoa học dữ liệu", "sub2"),
      getItem("Ngôn ngữ lập trình", "sub3"),
    ]),
    getItem("Kinh doanh", 2, null, [
      getItem("Giao tiếp", "sub4"),
      getItem("Bán hàng", "sub4"),
      getItem("Chiến lược kinh doanh", "sub5"),
    ]),
    getItem("Tài chính & kế toán", 3, null, [
      getItem("Phát triển web", "sub1"),
      getItem("Khoa học dữ liệu", "sub2"),
      getItem("Ngôn ngữ lập trình", "sub3"),
    ]),
    getItem("Thiết kế", 4, null, [
      getItem("Thiết kế web", "sub1"),
      getItem("Thiết kế trò chơi", "sub2"),
      getItem("Thiết kế thời trang", "sub3"),
    ]),
  ];

  return (
    <div className=" border-t-[1px] border-solid border-[#d1d7dc] shadow-md ">
      <Menu mode="horizontal" items={items} className="justify-center" />
    </div>
  );
}

export default MenuCategory;
