import { CopyOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { Key, useState } from "react";

type ItemType = any;

function ContentCourse({ data }: any) {
  const parts = data?.parts;
  const [video, setVideo] = useState("");

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
      const count = item.lectures.length;
      const totalTimeLectures = item.totalTimeLectures;
      return {
        key: item?._id,
        label: `Phần ${i}: ${item?.partName} `,
        children: (
          <div key={ids}>
            {item?.lectures?.map((el: any, ind: Key) => {
              return (
                <div key={ind}>
                  <div className="flex justify-between">
                    <div
                      className="flex"
                      onClick={() => handleGetSrcVideo(el?.video)}
                    >
                      <YoutubeOutlined className="mr-[8px]" />
                      {el?.lectureName}
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
          // src="https://firebasestorage.googleapis.com/v0/b/nodejs-b9313.appspot.com/o/Demo_NodeJS%2F%E3%80%90Vietsub%2BLyrics%E3%80%91%20Until%20I%20Found%20You%20(Juliet%20to%20your%20Romeo)%20-%20Stephen%20Sanchez%20ft.%20Em%20Beihold.mp4?alt=media&token=e6c32857-d991-4dab-aa0f-5a9ed7be372d"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // autoplay;
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
