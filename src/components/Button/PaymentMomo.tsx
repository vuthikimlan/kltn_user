import momo from "../../../public/logo-momo.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { paymentWithMOMO } from "@/api/user";

function PaymentWithMOMO({ amount, orderId }: any) {
  const route = useRouter();
  const onFinish = () => {
    paymentWithMOMO({
      amount: amount,
      orderId: orderId,
    }).then((res) => {
      const newUrl = res?.data?.payUrl;
      if (newUrl) {
        route.push(newUrl);
      }
    });
  };

  return (
    <>
      <div onClick={onFinish} className=" cursor-pointer">
        <Image src={momo} alt="" className="w-[100px] h-[100px] m-[10px] " />
      </div>
    </>
  );
}

export default PaymentWithMOMO;
