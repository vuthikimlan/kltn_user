import { Button, notification } from "antd";
import "./style.css";
import { addCart } from "@/api/user";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { countCart } from "@/store/appSlice";

function ButtonAddCart({ courseId }: any) {
  const dispatch = useDispatch();
  const token = Cookies.get("jwt");
  const route = useRouter();

  const handleAddCart = () => {
    addCart(courseId).then((res) => {
      if (res.status === 200) {
        const count = res?.data?.data?.countCourse;
        notification.success({
          message: "Thêm khóa học vào giỏ hàng thành công",
        });
        dispatch(countCart(count));
      } else if (res.status === 201) {
        notification.success({
          message: "Khóa học đã tồn tại trong giỏ hàng",
        });
      }
    });
  };
  return (
    <>
      <Button
        className="rounded-none ml-[47px] mt-[10px] bg-[#1677ff] text-[#fff] "
        type="primary"
        onClick={() => {
          if (token) {
            handleAddCart();
          } else {
            route.push("/login");
          }
        }}
      >
        Thêm vào giỏ hàng
      </Button>
    </>
  );
}

export default ButtonAddCart;
