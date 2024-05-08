import { delCart } from "@/api/user";
import { countCart } from "@/store/appSlice";
import Cookies from "js-cookie";

import { Button, notification } from "antd";
import { useDispatch } from "react-redux";

function DeleteCart({ courseId, handleGetCart }: any) {
  const dispatch = useDispatch();
  const handleDeleteCart = () => {
    delCart(courseId).then((res) => {
      if (res.status === 200) {
        const count = res?.data?.data?.countCourseCart;
        console.log("count", count);
        notification.success({
          message: "Xóa khóa học khỏi giỏ hàng thành công",
        });
        Cookies.set("cartCount", count);
        dispatch(countCart(count));
        handleGetCart();
      }
    });
  };
  return (
    <>
      <Button
        type="link"
        onClick={() => {
          handleDeleteCart();
        }}
      >
        Xóa
      </Button>
    </>
  );
}

export default DeleteCart;
