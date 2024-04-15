import { Tabs, TabsProps } from "antd";
import CarouselCourse from "../Carousel";
import MenuTopic from "../../Menu/MenuTopic";
import Topic from "../../Category/Topic";
import CourseList from "../CourseList";
import TabsComponent from "@/components/Tabs/Tabs";

function DetailCourseByField({ course, dataTopic, dataField }: any) {
  return (
    <>
      <div className="border-t-[1px] border-solid border-[#d1d7dc] shadow-md">
        <MenuTopic dataTopic={dataTopic} slugField={dataField?.slug} />
      </div>
      <div className=" mx-[8%] pt-[48px] ">
        <h1 className="text-3xl text-[#2d2f31] font-serif font-semibold mb-[48px] ">
          {`Khóa học ${dataField?.title} `}
        </h1>

        <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] ">
          Các khóa học để bạn bắt đầu
        </h1>
        {/* <Tabs items={items} defaultActiveKey="1" /> */}

        <TabsComponent
          label1="Thịnh hành"
          label2="Mới"
          children1={<CarouselCourse dataCourse={course} />}
          children2={<CarouselCourse dataCourse={course} />}
        />

        <h1 className="text-[#2d2f31] text-2xl font-semibold mb-[16px] mt-[30px] ">
          Chủ đề phổ biến{" "}
        </h1>
        <Topic dataTopic={dataTopic} />

        <h1 className="text-[#2d2f31] text-2xl font-semibold my-[20px] ">
          {`Tất cả các khóa học ${dataField?.title} `}
        </h1>
        <div>
          <CourseList dataCourse={course} />
        </div>
      </div>
    </>
  );
}

export default DetailCourseByField;
