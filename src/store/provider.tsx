"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "@/components/Header/Header";
function ProviderApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>
        <Header />
        {children}
        {/* <Footer /> */}
      </Provider>
    </>
  );
}

export default ProviderApp;
