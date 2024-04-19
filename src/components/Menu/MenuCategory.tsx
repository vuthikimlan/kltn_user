import { getAllField } from "@/api/field";
import { Popover } from "antd";
import Link from "next/link";
import { Key } from "react";
import MenuTopic from "./MenuTopic";

async function MenuCategory() {
  const res = await getAllField();
  let field: any[] = [];
  if (res) {
    field = res?.data?.items;
  }

  return (
    <div className=" border-t-[1px] border-solid border-[#d1d7dc] shadow-md flex justify-center ">
      {(field as any)?.map((el: any, ind: Key) => {
        return (
          <div key={ind} className="m-[13px] ">
            <Popover
              content={<MenuTopic dataTopic={el?.topics} slugField={el.slug} />}
            >
              <Link href={`courses/${el.slug}`}>
                <p>{el?.title} </p>
              </Link>
            </Popover>
          </div>
        );
      })}
    </div>
  );
}

export default MenuCategory;
