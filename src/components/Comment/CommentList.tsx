"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, message } from "antd";
import { Key, useState } from "react";
import { filterComment, postComment } from "@/api/comment";

function CommentList({ course, getcomment }: any) {
  const [comment, setComment] = useState(course?.ratings);
  const [search, setSearch] = useState();

  function formatDate(updateDay: any) {
    const date = new Date(updateDay);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  }

  const handlePostComment = (values: string) => {
    postComment(values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Đánh giá khóa học thành công");
        getcomment();
      }
    });
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearchComment = (value: any) => {
    filterComment(course?._id, {
      comment: value,
    }).then((res) => {
      setComment(
        res?.data?.data?.items.map((el: any) => {
          return el;
        })
      );
    });
  };

  return (
    <div className="w-[65%] m-[auto] ">
      <h1 className="text-[#2d2f31] text-2xl font-semibold my-[15px]  ">
        Đánh giá
      </h1>
      <div className="mb-[10px] ">
        <Input.Search
          placeholder="Tìm kiếm đánh giá"
          onChange={handleSearch}
          value={search}
          onSearch={(value) => {
            handleSearchComment(value);
          }}
        />
      </div>
      {comment.map((el: any, ind: Key) => (
        <div key={ind}>
          <div>
            <div>
              <div className="w-[100%] ">
                <div className="border-b-[1px] border-solid border-[#d1d7dc] py-[20px]">
                  <div className="flex mb-[10px] ">
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className="ml-[15px] ">
                      <p className="font-bold ">{el?.postedBy?.name} </p>
                      <span className="mr-[5px] ">{el?.star} sao</span>
                      <span>{formatDate(`${el?.updatedAt}`)}</span>
                    </div>
                  </div>
                  <p>{el?.comment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-[20px] ">
        <h1 className="text-[#2d2f31] text-2xl font-semibold my-[15px]  ">
          Đánh giá của bạn
        </h1>
        <Form onFinish={handlePostComment}>
          <Form.Item name="comment">
            <Input.TextArea placeholder="Nội dung đánh giá" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className=" bg-[#fff] border-[#4096ff] text-[#4096ff] text-xl rounded-none   "
            >
              Đánh giá
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default CommentList;
