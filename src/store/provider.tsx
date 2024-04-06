"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "@/components/Header/Header";
import { ConfigProvider } from "antd";
import vinVN from "antd/locale/vi_VN";
import { AntdRegistry } from "@ant-design/nextjs-registry";
function ProviderApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <ConfigProvider locale={vinVN}>
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
        {/* <Footer /> */}
      </Provider>
    </>
  );
}

export default ProviderApp;
