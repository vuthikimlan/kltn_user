import { Col, Row } from "antd";
import { dataCategory } from "../DataDemo";

function Category() {
  return (
    <div className="grid-cols-4 grid gap-x-8 gap-y-4 ">
      {dataCategory.map((item, ind) => (
        <div key={ind} className=" cursor-pointer  ">
          <div className="overflow-hidden">
            <img
              src={item.image}
              className="hover:scale-[1.2] transition-transform duration-[0.3] ease-in-out "
            />
          </div>
          <p className=" text-center font-semibold mt-[5px] ">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Category;
