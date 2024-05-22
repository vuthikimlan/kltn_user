"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Rate, Skeleton, message } from "antd";
import { Key, useEffect, useState } from "react";
import { filterComment, getCommentByCourse, postComment } from "@/api/comment";
import FormComment from "../Modal/FormComment";
import { useDispatch } from "react-redux";
import { modalOpen } from "@/store/appSlice";

function CommentList({ getcomment, courseId, totalRatings }: any) {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const [comment, setComment] = useState<any>(null);

  function formatDate(updateDay: any) {
    const date = new Date(updateDay);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  }
  const handleGetComment = (courseId: any) => {
    getCommentByCourse(courseId).then((res) => {
      setComment(res?.data?.comments);
    });
  };
  useEffect(() => {
    if (courseId) {
      handleGetComment(courseId);
    }
  }, [courseId]);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearchComment = (value: any) => {
    filterComment(courseId, {
      comment: value,
    }).then((res) => {
      setComment(
        res?.data?.data?.items.map((el: any) => {
          return el;
        })
      );
    });
  };

  if (!comment) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }

  return (
    <div className="w-[65%] m-[auto] ">
      <h1 className="text-[#2d2f31] text-2xl  font-semibold my-[15px]  ">
        Phản hồi của học viên
      </h1>
      <div className=" flex ">
        <div className=" text-center ">
          <p className="text-[#b4690e] text-8xl font-bold ">{totalRatings}</p>
          <span className="mr-[5px] ">
            <Rate
              disabled
              allowHalf
              defaultValue={totalRatings}
              className="text-[#b4690e] "
            />
          </span>
          <p className=" font-semibold text-[#b4690e] text-xl ">
            Xếp hạng của học viên
          </p>
        </div>
      </div>
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
          <div className="w-[100%] ">
            <div className="border-t-[1px] border-solid border-[#d1d7dc] py-[20px]">
              <div className="flex mb-[10px] ">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="ml-[15px] ">
                  <p className="font-bold ">{el?.postedBy?.name} </p>
                  <span className="mr-[5px] ">
                    {" "}
                    <Rate disabled defaultValue={el?.star} allowHalf />
                  </span>
                  <span>{formatDate(`${el?.updatedAt}`)}</span>
                </div>
              </div>
              <p>{el?.comment}</p>
            </div>
            {el?.reply ? (
              <>
                <div className="border-l-[5px] border-solid border-[#d1d7dc] px-[20px] ml-[30px] ">
                  <div className="flex mb-[10px] ">
                    <Avatar size="large" icon={<UserOutlined />} />
                    <div className="ml-[15px] text-sm ">
                      <p className="font-bold ">{el?.reply?.postedBy?.name}</p>
                      <span className="mr-[5px] text-[#6A6F73] ">
                        Phản hồi của giảng viên
                      </span>
                    </div>
                  </div>
                  <p>{el?.reply?.content}</p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
      <div className="mt-[20px] ">
        <Button
          onClick={() => {
            dispatch(modalOpen());
          }}
          type="primary"
          className="mb-[20px] bg-[#1677ff] "
        >
          Đánh giá khóa học
        </Button>
        <FormComment courseId={courseId} getcomment={handleGetComment} />
      </div>
    </div>
  );
}

export default CommentList;
