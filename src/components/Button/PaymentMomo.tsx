import Link from "next/link";
import momo from "../../../public/logo-momo.webp";
import Image from "next/image";

function PaymentWithMomo() {
  return (
    <>
      <Link href={""}>
        <Image
          src={momo}
          alt=""
          className="w-[100px] h-[100px] ml-[30px] my-[10px] "
        />
      </Link>
    </>
  );
}

export default PaymentWithMomo;
