// "use client";
// import { ProFormSelect } from "@ant-design/pro-components";
// import { Button, Form, Input } from "antd";
// import { paymentWithVNPAY } from "@/api/user";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// function Payment() {
//   const [url, setUrl] = useState("");
//   const route = useRouter();
//   const onFinish = (values: any) => {
//     paymentWithVNPAY(values).then((res) => {
//       console.log("res", res);
//       setUrl(res?.data?.vnpUrl);
//     });
//   };

//   return (
//     <>
//       <h1>Tạo mới đơn hàng</h1>
//       <div>
//         <Form onFinish={onFinish}>
//           <Form.Item name="amount">
//             <Input
//               title="Giá"
//               className="input"
//               placeholder="Số tiền cần thanh toán"
//             />
//           </Form.Item>
//           <Form.Item name="orderDescription">
//             <Input
//               title="Nội dung thanh toán"
//               className="input"
//               placeholder="Nội dung thanh toán"
//             />
//           </Form.Item>
//           <ProFormSelect
//             name="language"
//             label="Ngôn ngữ"
//             options={[
//               { label: "Tiếng việt", value: "vn" },
//               { label: "English", value: "en" },
//             ]}
//             placeholder="Vui lòng chọn ngôn ngữ"
//           />
          
//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="bg-black"
//               onClick={() => {
//                 route.push(`${url}`);
//               }}
//             >
//               Thanh toán
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </>
//   );
// }

// export default Payment;
