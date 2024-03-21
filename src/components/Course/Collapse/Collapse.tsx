import { CopyOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";
import Link from "next/link";

function CollapseCourse() {
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

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Tên phần",
      children: (
        <div>
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
              <Link href={""}>Tên bài giảng</Link>{" "}
              {/* link áp dụng với những bài giảng đc xem trước khi chưa mua */}
            </div>
            <span>16:46</span>
          </div>
          <div className="flex justify-between">
            <div className="flex ">
              <CopyOutlined className="mr-[8px]" />
              {/* Nếu là tài liệu thì hiển thị icon này */}
              <p> Tên bài giảng</p>
            </div>
            <span>00:08</span>
          </div>
        </div>
      ),
      extra: genExtra(),
    },
    {
      key: "2",
      label: "Tên phần",
      children: (
        <div>
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
              <Link href={""}>Tên bài giảng</Link>{" "}
              {/* link áp dụng với những bài giảng đc xem trước khi chưa mua */}
            </div>
            <span>16:46</span>
          </div>
          <div className="flex justify-between">
            <div className="flex ">
              <CopyOutlined className="mr-[8px]" />
              {/* Nếu là tài liệu thì hiển thị icon này */}
              <p> Tên bài giảng</p>
            </div>
            <span>00:08</span>
          </div>
        </div>
      ),
      extra: genExtra(),
    },
  ];
  return (
    <>
      <div className="text-sm  my-[8px] ">
        <ul className="flex list-disc ">
          <li className="ml-[20px] mr-[25px] "> 16 phần</li>
          <li className="mr-[25px] "> 192 bài giảng</li>
          <li className="mr-[25px] "> 47 giờ 10 phút tổng thời lượng</li>
        </ul>
      </div>
      <Collapse items={items} />
    </>
  );
}

export default CollapseCourse;
