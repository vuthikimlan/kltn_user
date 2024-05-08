import { getAllField } from "@/api/field";
import { Dropdown, Popover } from "antd";
import Link from "next/link";
import { Key } from "react";
import "./style.css";
import { RightOutlined } from "@ant-design/icons";
import ContentTopic from "../ContentPopover/ContentTopic";

async function MenuField() {
  const res = await getAllField();
  let field: any[] = [];
  if (res) {
    field = res?.data?.items;
  }

  const contentField = (
    <div className=" aaaa ">
      {(field as any)?.map((el: any, ind: Key) => {
        return (
          <div key={ind} className="m-[13px] ">
            <Popover
              content={
                <ContentTopic dataTopic={el?.topics} slugField={el.slug} />
              }
              title="Chủ đề phổ biến"
              placement="right"
            >
              <Link href={`courses/${el.slug}`}>
                <div className="flex justify-between text-[#2d2f31] hover:text-[#401b9c] ">
                  <p className=" mr-[60px]  ">{el?.title} </p>
                  <RightOutlined />
                </div>
              </Link>
            </Popover>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className=" mr-[2%] ">
      <Popover
        content={contentField}
        arrow={false}
        style={{
          borderRadius: "0px",
        }}
      >
        Thể loại
      </Popover>
    </div>
  );
}

export default MenuField;
