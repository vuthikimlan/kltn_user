import { CheckOutlined } from "@ant-design/icons";
import ButtonAddCart from "../Button/AddCart";
import "./style.css";

function ContentPopover({ items }: any) {
  return (
    <>
      <div className="">
        <h1 className=" w-[17rem] text-lg font-semibold mb-[10px] text-wrap ">
          {items.name}
        </h1>
        <p className="description text-sm w-[17rem] mb-[10px] ">
          Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
          Javascript, Node, React, PostgreSQL, Web3 and DApps
        </p>
        <ul className="w-[15rem] ">
          {items.content.map((el: any, ind: any) => {
            return (
              <div key={ind} className="flex items-baseline ">
                <CheckOutlined className="mt-[6px] " />
                <li className="ml-[10px] mb-[5px] ">{el} </li>
              </div>
            );
          })}
        </ul>
        <div>
          <ButtonAddCart />
        </div>
      </div>
    </>
  );
}

export default ContentPopover;
