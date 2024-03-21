import { Button } from "antd";
import "./style.css";

function ButtonAddCart() {
  return (
    <>
      <Button
        className="rounded-none ml-[47px] mt-[10px] bg-[#1677ff] text-[#fff] "
        type="primary"
      >
        Thêm vào giỏ hàng
      </Button>
    </>
  );
}

export default ButtonAddCart;
