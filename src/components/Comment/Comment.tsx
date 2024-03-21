"use client";
import { modalOpen } from "@/store/appSlice";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { useDispatch } from "react-redux";
import ModalComment from "../Modal/CommentAll";

function CommentCourse() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex">
        <h1 className=" text-xl font-semibold mb-[16px] mr-[20px] ">
          {" "}
          <StarFilled style={{ color: "#b4690e" }} />
          4,9 xếp hạng khóa học{" "}
        </h1>
        <h1 className=" text-xl font-semibold mb-[16px] ">250 xếp hạng</h1>
      </div>
      <div className="grid-cols-2 grid gap-8 ">
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
      <Button
        onClick={() => {
          dispatch(modalOpen());
        }}
        type="primary"
        className="mb-[20px] bg-[#1677ff] "
      >
        Hiển thị tất cả các đánh giá
      </Button>
      <ModalComment />
    </>
  );
}

export default CommentCourse;
