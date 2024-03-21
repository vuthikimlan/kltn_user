import { Key } from "react";
import { dataCategory } from "../DataDemo";

function Topic() {
  return (
    <div className="grid-cols-4 grid gap-x-8 gap-y-4 ">
      {dataCategory.map((item: any, ind: Key) => {
        return (
          <div key={ind}>
            <p className="border-[1px] border-solid border-[#e4e8eb] p-[10px] text-center font-semibold ">
              {item.name}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Topic;
