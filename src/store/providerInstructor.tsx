"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import MenuInstructor from "@/components/Menu/MenuInstructor";
function ProviderInstructor({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>
        <MenuInstructor />
        {children}
      </Provider>
    </>
  );
}

export default ProviderInstructor;
