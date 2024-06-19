"use client";
import { getVpayIpn } from "@/api/user";
import { countCart } from "@/store/appSlice";
import { Button, Result, message } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

function PaymentSuccess(params: any) {
  const router = useRouter();
  const query = params?.params?.searchParams;
  const dispatch = useDispatch();

  const paramsString = Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key])}`)
    .join("&");

  const handleIPN = () => {
    getVpayIpn(paramsString).then((res) => console.log(res));
    router.push("/home");
    message.info("Vui lòng kiểm tra email để kích hoạt khóa học");
  };
  return (
    <div className="mt-[50px]">
      <Result
        status="success"
        title="Khóa học của bạn đã được thanh toán thành công"
        subTitle="Cảm ơn bạn đã tin tưởng và lựa chọn dịch vụ của chúng tôi. Vui lòng vào email để kích hoạt khóa học"
        extra={[
          <Button
            key="redirec"
            onClick={() => {
              handleIPN();
              Cookies.set("cartCount", "0");
              dispatch(countCart(0));
            }}
          >
            Quay về trang chủ
          </Button>,
        ]}
      />
    </div>
  );
}

export default PaymentSuccess;
