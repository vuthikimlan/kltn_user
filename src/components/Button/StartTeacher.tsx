"use client";

import { Button } from "antd";
import { useState } from "react";
import PageFormRegisterTeacher from "../Modal/FormRegisterTeacher";
import "./style.css";

function ButtonStartTeacher() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpenModal(true);
        }}
        className="rounded-none text-[#fff] bg-[#000] hover:bg-[#3e4143] w-[100%] "
      >
        Bắt đầu
      </Button>
      <PageFormRegisterTeacher
        openModal={openModal}
        onSuccess={() => {
          setOpenModal(false);
        }}
        onOpenChange={(open: any) => {
          if (!open) {
            setOpenModal(false);
          }
        }}
      />
    </>
  );
}

export default ButtonStartTeacher;
