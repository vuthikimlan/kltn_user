import { Button } from "antd";
import { useParams, useRouter } from "next/navigation";

function GetIPN() {
  const router = useRouter();
  const params = useParams();
  console.log("params", params);
  return (
    <>
      <Button key="redirec">Quay về trang chủ</Button>
    </>
  );
}

export default GetIPN;
