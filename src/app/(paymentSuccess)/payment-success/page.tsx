import { Result } from "antd";

function PaymentSuccess() {
  return (
    <div className="mt-[50px]">
      <Result
        status="success"
        title="Khóa học của bạn đã được  thanh toán thành công"
      />
    </div>
  );
}

export default PaymentSuccess;
