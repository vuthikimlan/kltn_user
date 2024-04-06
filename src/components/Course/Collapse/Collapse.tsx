import { CopyOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";
import Link from "next/link";
import { Key } from "react";

type ItemType = any;

function CollapseCourse({ data }: any) {
  const genExtra = () => {
    return (
      <>
        <div className="text-sm">
          <ul className="flex list-disc ">
            <li className="mr-[25px]  "> 3 bài giảng</li>
            <li> 17 phút </li>
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
                    <span>16:46</span>
                  </div>
                  {el?.document && (
                    <div className="flex justify-between">
                      <div className="flex ">
                        <CopyOutlined className="mr-[8px]" />
                        {/* Nếu là tài liệu thì hiển thị icon này */}
                        <p> {el?.lectureName}</p>
                      </div>
                      <span>00:08</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ),
        extra: genExtra(),
      };
    });
    return result;
  };

  return (
    <>
      <div className="text-sm  my-[8px] ">
        <ul className="flex list-disc ">
          <li className="ml-[20px] mr-[25px] "> 16 phần</li>
          <li className="mr-[25px] "> 192 bài giảng</li>
          <li className="mr-[25px] "> 47 giờ 10 phút tổng thời lượng</li>
        </ul>
      </div>
      <Collapse items={itemsLecture(data)} />
    </>
  );
}

export default CollapseCourse;
