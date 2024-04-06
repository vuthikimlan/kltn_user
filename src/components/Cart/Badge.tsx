import { RootState } from "@/store/store";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import Link from "next/link";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

function BadgeCart() {
  const count = useSelector((state: RootState) => state?.app?.countCourseCart);
  return (
    <>
      <Link href={"/cart"}>
        <Space size="large">
          <Badge count={count} offset={[1, 9]}>
            {" "}
            {/* Đổi màu cho Badge dùng color="pink" */}
            <Avatar
              size="large"
              style={{ backgroundColor: "#fff", color: "#000000" }}
              icon={<ShoppingCartOutlined />}
            />
          </Badge>
        </Space>
      </Link>
    </>
  );
}

export default BadgeCart;
