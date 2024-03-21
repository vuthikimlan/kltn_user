import { Tabs, TabsProps } from "antd";
import IntroduceCourse from "../introduceCourse";
import CommentList from "../../Comment/CommentList";
import ContentCourse from "../Collapse/ContentCourse";

function LearningCourse() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tổng quan",
      children: <IntroduceCourse />,
    },
    {
      key: "2",
      label: "Đánh giá",
      children: <CommentList />,
    },
  ];
  return (
    <>
      <div className=" border-[1px] boder-solid border-[#2d2f31] bg-[#2d2f31] text-[#fff] p-[20px] ">
        <h1 className="w-[10%] m-[auto] ">Tên bài học</h1>
      </div>
      <div className="flex ">
        <div>
          <iframe
            width="1200"
            height="480"
            src="https://firebasestorage.googleapis.com/v0/b/nodejs-b9313.appspot.com/o/Demo_NodeJS%2F%E3%80%90Vietsub%2BLyrics%E3%80%91%20Until%20I%20Found%20You%20(Juliet%20to%20your%20Romeo)%20-%20Stephen%20Sanchez%20ft.%20Em%20Beihold.mp4?alt=media&token=e6c32857-d991-4dab-aa0f-5a9ed7be372d"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // autoplay;
            allowFullScreen
          ></iframe>
          <div className="ml-[20px] ">
            <Tabs items={items} defaultActiveKey="1" />
          </div>
        </div>
        <div className="w-[20%] cursor-pointer ">
          <ContentCourse />
        </div>
      </div>
    </>
  );
}

export default LearningCourse;
