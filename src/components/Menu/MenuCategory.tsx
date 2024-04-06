"use client";

import { getAllField } from "@/api/field";
import { Menu, MenuProps, Popover } from "antd";
import Link from "next/link";
import { Key, useEffect, useState } from "react";
import MenuTopic from "./MenuTopic";

function MenuCategory() {
  const [field, setField] = useState();

  useEffect(() => {
    getAllField().then((res) => {
      setField(res?.data?.items);
    });
  }, []);

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
