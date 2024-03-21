import { CopyOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";

function ContentCourse() {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },
    {
      key: "2",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },

    {
      key: "3",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },
    {
      key: "4",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },
    {
      key: "5",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },
    {
      key: "6",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },
    {
      key: "7",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },
    {
      key: "8",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },
    {
      key: "9",
      label: "Tên phần",
      children: (
        <div className="snap-start">
          <div className="flex justify-between">
            <div className="flex  ">
              <YoutubeOutlined className="mr-[8px]" />
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
    },
  ];
  return (
    <div className=" snap-y snap-mandatory ">
      <h1 className="font-semibold bg-[#fff] border-[1px] border-solid border-transparent p-[15px]  w-[18.3rem] ">
        Nội dung khóa học
      </h1>

      <Collapse items={items} className=" " />
    </div>
  );
}

export default ContentCourse;
