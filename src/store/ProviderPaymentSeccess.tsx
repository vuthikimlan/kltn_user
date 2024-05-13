"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import vinVN from "antd/locale/vi_VN";

function ProviderPaymentSuccess({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>
        <ConfigProvider locale={vinVN}>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default ProviderPaymentSuccess;
