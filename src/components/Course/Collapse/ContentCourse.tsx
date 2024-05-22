import { CopyOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Checkbox, Collapse } from "antd";
import { Key, useState } from "react";
import type { CheckboxProps } from "antd";
import { progressTracker } from "@/api/user";

type ItemType = any;

function ContentCourse({
  data,
  completedLectures,
  handleGetProgressUser,
}: any) {
  const parts = data?.parts;
  const [video, setVideo] = useState("");
  const [lectureId, setLectureId] = useState("");

  const onChange: CheckboxProps["onChange"] = (e) => {
    progressTracker(data?._id, lectureId, e.target.checked);
    handleGetProgressUser();
  };

  const genExtra = ({ count, totalTimeLectures }: any) => {
    return (
      <>
        <div className="text-sm">
          <ul className="flex list-disc ">
            <li className="mr-[25px]  "> {count} bài giảng</li>
            <li> {totalTimeLectures} phút </li>
          </ul>
        </div>
      </>
    );
  };

  const handleGetSrcVideo = (src: string) => {
    setVideo(src);
  };

  const itemsLecture = (items: any): ItemType[] | undefined => {
    const result = items?.map((item: any, ids: any) => {
      const i = String(ids + 1);
      const count = item.totalLecturePart;
      const totalTimeLectures = item.totalTimeLectures;
      return {
        key: item?._id,
        label: `Phần ${i}: ${item?.partName} `,
        children: (
          <div key={ids}>
            {" "}
            {item?.lectures?.map((el: any, ind: Key) => {
              const isCompleted = completedLectures.find(
                (items: any) =>
                  items?.lectureId &&
                  el?._id &&
                  items.lectureId.toString() === el?._id.toString() &&
                  items.completed === true
              );

              return (
                <div key={ind}>
                  <div className="flex justify-between">
                    <div className="flex ">
                      <Checkbox
                        defaultChecked={!!isCompleted}
                        onChange={onChange}
                      />
                      <div
                        className="flex"
                        onClick={() => {
                          handleGetSrcVideo(el?.video);
                          setLectureId(el?._id);
                        }}
                      >
                        {/* <YoutubeOutlined className="mr-[8px]" /> */}
                        <p className="ml-[8px]">{el?.lectureName}</p>
                      </div>
                    </div>

                    <span>{el?.duration}</span>
                  </div>
                  {el?.document && (
                    <div className="flex justify-between">
                      <div className="flex ">
                        <CopyOutlined className="mr-[8px]" />
                        {/* Nếu là tài liệu thì hiển thị icon này */}
                        <p> {el?.lectureName}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ),
        extra: genExtra({ count, totalTimeLectures }),
      };
    });
    return result;
  };
  return (
    <div className="flex ">
      <div>
        <iframe
          width="1370"
          height="600"
          src={video}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" snap-y snap-mandatory ">
        <h1 className="font-semibold bg-[#fff] border-[1px] border-solid border-transparent p-[15px]  w-[30.5rem] ">
          Nội dung khóa học
        </h1>
        <Collapse items={itemsLecture(parts)} className="rounded-none " />
      </div>
    </div>
  );
}

export default ContentCourse;
