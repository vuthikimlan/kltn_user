import { deleteOrder } from "@/api/user";
import { countCart } from "@/store/appSlice";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Modal, notification } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function CancelPayment({ orderId }: any) {
  const { confirm } = Modal;
  const route = useRouter();
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.info({
      message: "Thông báo",
      description: "Đơn hàng của bạn đã được hủy thành công",
      placement: "top",
    });
  };

  const handleDelete = () => {
    deleteOrder(orderId).then((res) => {
      if (res.status === 200) {
        route.replace("/home");
        openNotification();
        dispatch(countCart(0));
      }
    });
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "Hủy đơn hàng",
      icon: <ExclamationCircleFilled />,
      content: "Bạn có chắc chắn muốn hủy đơn hàng?",
      okText: "Đồng ý",
      okType: "danger",
      cancelText: "Hủy",
      onOk() {
        handleDelete();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      <Button onClick={showDeleteConfirm}>Hủy thanh toán</Button>
    </>
  );
}

export default CancelPayment;
