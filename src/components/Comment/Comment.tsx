"use client";
import { modalOpen } from "@/store/appSlice";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { useDispatch } from "react-redux";
import ModalComment from "../Modal/CommentAll";
import { Key } from "react";

function CommentCourse({ data, totalRating, ratings }: any) {
  const dispatch = useDispatch();

  function formatDate(updateDay: any) {
    const date = new Date(updateDay);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  }
  return (
    <>
      <div className="flex">
        <h1 className=" text-xl font-semibold mb-[16px] mr-[20px] ">
          <StarFilled style={{ color: "#b4690e" }} />
          {`${totalRating} xếp hạng khóa học`}
        </h1>
        <h1 className=" text-xl font-semibold mb-[16px] ">
          {ratings} xếp hạng
        </h1>
      </div>
      {data?.map((el: any, ind: Key) => {
        return (
          <div key={ind}>
            <div className="grid-cols-2 grid gap-8 ">
              <div className="border-t-[1px] border-solid border-[#d1d7dc] py-[20px]">
                <div className="flex mb-[10px] ">
                  <Avatar size="large" icon={<UserOutlined />} />
                  <div className="ml-[15px] text-sm ">
                    <p className="font-bold ">{el?.postedBy?.name}</p>
                    <span className="mr-[5px] ">5 sao</span>
                    <span>{formatDate(`${el?.updatedAt}`)}</span>
                  </div>
                </div>
                <p>{el?.comment}</p>
              </div>
            </div>
          </div>
        );
      })}
      <Button
        onClick={() => {
          dispatch(modalOpen());
        }}
        type="primary"
        className="mb-[20px] bg-[#1677ff] "
      >
        Hiển thị tất cả các đánh giá
      </Button>
      <ModalComment data={data} totalRating={totalRating} ratings={ratings} />
    </>
  );
}

export default CommentCourse;
