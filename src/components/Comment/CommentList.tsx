"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Form, Input } from "antd";

function CommentList() {
  return (
    <>
      <div className="w-[65%] m-[auto] ">
        <div>
          <h1 className="text-[#2d2f31] text-2xl font-semibold my-[15px]  ">
            Đánh giá
          </h1>
          <div className="mb-[10px] ">
            <Input.Search placeholder="Tìm kiếm đánh giá" />
          </div>
          <div className="w-[100%] ">
            <div className="border-b-[1px] border-solid border-[#d1d7dc] py-[20px]">
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

            <div className="border-b-[1px] border-solid border-[#d1d7dc] py-[20px]">
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

            <div className="border-b-[1px] border-solid border-[#d1d7dc] py-[20px]">
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

            <div className="border-b-[1px] border-solid border-[#d1d7dc] py-[20px]">
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
        <div className="mt-[20px] ">
          <h1 className="text-[#2d2f31] text-2xl font-semibold my-[15px]  ">
            Đánh giá của bạn
          </h1>
          <Form>
            <Form.Item name="comment">
              <Input.TextArea placeholder="Nội dung đánh giá" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CommentList;
