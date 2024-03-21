import { Result } from "antd";

function PaymentSuccess() {
  return (
    <div className="mt-[50px]">
      <Result
        status="success"
        title="Khóa học của bạn đã được  thanh toán thành công"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      />
    </div>
  );
}

export default PaymentSuccess;
