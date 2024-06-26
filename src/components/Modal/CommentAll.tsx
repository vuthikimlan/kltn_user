"use client";
import { modalClose } from "@/store/appSlice";
import { RootState } from "@/store/store";
import { StarFilled, UserOutlined } from "@ant-design/icons";
import { ModalForm } from "@ant-design/pro-components";
import { Avatar, Input, Rate } from "antd";
import { Key } from "react";
import { useDispatch, useSelector } from "react-redux";

function ModalComment({ data, totalRating, ratings }: any) {
  const modalOpen = useSelector((state: RootState) => state.app.openModal);

  const dispatch = useDispatch();
  const hiddenModal = () => {
    dispatch(modalClose());
  };
  function formatDate(updateDay: any) {
    const date = new Date(updateDay);
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  }

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
              {totalRating} xếp hạng khóa học{" "}
            </h1>
            <h1 className=" text-xl font-semibold mb-[16px] ml-[2rem] ">
              {ratings} xếp hạng
            </h1>
          </div>
          <div className=" flex justify-between ">
            <div>
              <Input.Search placeholder="Tìm kiếm đánh giá" />
            </div>
            <div className="w-[65%] ">
              {data?.map((el: any, ind: Key) => {
                return (
                  <div key={ind}>
                    <div className="border-t-[1px] border-solid border-[#d1d7dc] py-[20px]">
                      <div className="flex mb-[10px] ">
                        <Avatar size="large" icon={<UserOutlined />} />
                        <div className="ml-[15px] ">
                          <p className="font-bold ">{el?.postedBy?.name}</p>
                          <span className="mr-[5px] ">
                            <Rate disabled allowHalf defaultValue={el?.star} />{" "}
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
                              <p className="font-bold ">
                                {el?.reply?.postedBy?.name}
                              </p>
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
                );
              })}
            </div>
          </div>
        </div>
      </ModalForm>
    </>
  );
}

export default ModalComment;
