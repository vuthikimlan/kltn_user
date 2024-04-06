import { CheckOutlined } from "@ant-design/icons";
import ButtonAddCart from "../Button/AddCart";
import "./style.css";

function ContentPopover({ items }: any) {
  return (
    <>
      <div className=" p-[13px] ">
        <h1 className=" w-[17rem] text-lg font-semibold mb-[10px] text-wrap ">
          {items?.name}
        </h1>
        <p className="description text-sm w-[17rem] mb-[10px] ">
          {items?.description}
        </p>
        <ul className="w-[15rem] ">
          {items?.lessonContent.map((el: any, ind: any) => {
            return (
              <div key={ind} className="flex items-baseline ">
                <CheckOutlined className="mt-[6px] " />
                <li className="ml-[10px] mb-[5px] ">{el} </li>
              </div>
            );
          })}
        </ul>
        <div>
          <ButtonAddCart courseId={items?._id} />
        </div>
      </div>
    </>
  );
}

export default ContentPopover;
