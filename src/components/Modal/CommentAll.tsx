"use client";
import { modalClose } from "@/store/appSlice";
import { RootState } from "@/store/store";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import { ModalForm } from "@ant-design/pro-components";
import { Avatar, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

function ModalComment() {
  const modalOpen = useSelector((state: RootState) => state.app.openModal);
  const dispatch = useDispatch();
  const hiddenModal = () => {
    dispatch(modalClose());
  };

  return (
    <>
      <ModalForm
        submitter={false}
        open={modalOpen}
        onOpenChange={(open) => {
          if (!open) {
            hiddenModal();
          }
        }}
      >
        <div className="">
          <div className="flex">
            <h1 className=" text-xl font-semibold mb-[16px] mr-[20px] ">
              {" "}
              <StarFilled style={{ color: "#b4690e" }} />
              4,9 xếp hạng khóa học{" "}
            </h1>
            <h1 className=" text-xl font-semibold mb-[16px] ">250 xếp hạng</h1>
          </div>
          <div className=" flex justify-between ">
            <div>
              <Input.Search placeholder="Tìm kiếm đánh giá" />
            </div>
            <div className="w-[65%] ">
              <div className="border-t-[1px] border-solid border-[#d1d7dc] py-[20px]">
                <div className="flex mb-[10px] ">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div className="ml-[15px] ">
                    <p className="font-bold ">Nguyễn văn b</p>
                    <span className="mr-[5px] ">5 sao</span>
                    <span>Thời gian đánh giá</span>
                  </div>
                </div>
                <p>Nội dung bài đánh giá</p>
              </div>

              <div className="border-t-[1px] border-solid border-[#d1d7dc] py-[20px]">
                <div className="flex mb-[10px] ">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div className="ml-[15px] ">
                    <p className="font-bold ">Nguyễn văn b</p>
                    <span className="mr-[5px] ">5 sao</span>
                    <span>Thời gian đánh giá</span>
                  </div>
                </div>
                <p>Nội dung bài đánh giá</p>
              </div>

              <div className="border-t-[1px] border-solid border-[#d1d7dc] py-[20px]">
                <div className="flex mb-[10px] ">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div className="ml-[15px] ">
                    <p className="font-bold ">Nguyễn văn b</p>
                    <span className="mr-[5px] ">5 sao</span>
                    <span>Thời gian đánh giá</span>
                  </div>
                </div>
                <p>Nội dung bài đánh giá</p>
              </div>

              <div className="border-t-[1px] border-solid border-[#d1d7dc] py-[20px]">
                <div className="flex mb-[10px] ">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div className="ml-[15px] ">
                    <p className="font-bold ">Nguyễn văn b</p>
                    <span className="mr-[5px] ">5 sao</span>
                    <span>Thời gian đánh giá</span>
                  </div>
                </div>
                <p>Nội dung bài đánh giá</p>
              </div>
            </div>
          </div>
        </div>
      </ModalForm>
    </>
  );
}

export default ModalComment;
