import { ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import Link from "next/link";

function BadgeCart() {
  return (
    <>
      <Link href={"/cart"}>
        <Space size="large">
          <Badge count={3} offset={[1, 9]}>
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
