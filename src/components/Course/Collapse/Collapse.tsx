import { CopyOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import Link from "next/link";
import { Key } from "react";

type ItemType = any;

function CollapseCourse({ data, numPart, totalTime }: any) {
  const genExtra = (item: any) => {
    return (
      <>
        <div className="text-sm">
          <ul className="flex list-disc ">
            <li className="mr-[25px]  ">{item?.lectures.length} bài giảng </li>
            <li>{item?.totalTimeLectures} phút </li>
          </ul>
        </div>
      </>
    );
  };

  const itemsLecture = (items: any): ItemType[] | undefined => {
    const result = items?.map((item: any, ids: any) => {
      const i = String(ids + 1);
      return {
        key: item?._id,
        label: `Phần ${i}: ${item?.partName} `,
        children: (
          <div key={ids}>
            {item?.lectures?.map((el: any, ind: Key) => {
              return (
                <div key={ind}>
                  <div className="flex justify-between">
                    <div className="flex">
                      <YoutubeOutlined className="mr-[8px]" />
                      {/* <Link href={""}>Tên bài giảng</Link>{" "} */}
                      {/* link áp dụng với những bài giảng đc xem trước khi chưa mua */}
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
        extra: genExtra(item),
      };
    });
    return result;
  };

  return (
    <>
      <div className="text-sm  my-[8px] ">
        <ul className="flex list-disc ">
          <li className="ml-[20px] mr-[25px] "> {numPart} phần</li>
          {/* <li className="mr-[25px] "> 192 bài giảng</li> */}
          <li className="mr-[25px] ">Tổng thời lượng: {totalTime} phút</li>
        </ul>
      </div>
      <Collapse items={itemsLecture(data)} />
    </>
  );
}

export default CollapseCourse;
