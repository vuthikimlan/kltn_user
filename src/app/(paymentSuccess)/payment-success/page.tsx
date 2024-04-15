"use client";
import { getVpayIpn } from "@/api/user";
import GetIPN from "@/components/Button/getIPN";
import { Button, Result } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/router";

function PaymentSuccess(params: any) {
  const router = useRouter();
  const query = params.searchParams;

  const paramsString = Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key])}`)
    .join("&");

  const handleIPN = () => {
    getVpayIpn(paramsString).then((res) => console.log(res));
    router.push("/home");
  };
  return (
    <div className="mt-[50px]">
      <Result
        status="success"
        title="Khóa học của bạn đã được  thanh toán thành công"
        subTitle="Cảm ơn bạn đã tin tưởng và lựa chọn dịch vụ của chúng tôi. Khóa học của bạn đã được kích hoạt, bạn có thể bắt đầu học ngay bây giờ."
        extra={[
          <Button
            key="redirec"
            onClick={() => {
              handleIPN();
              // router.push("/home");
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
