import Link from "next/link";
import { getAllField } from "../../api/field";
import { Key } from "react";

async function Category() {
  const res = await getAllField();
  let field = [];
  if (res) {
    field = res?.data?.items;
  }

  return (
    <div className="grid-cols-4 grid gap-x-8 gap-y-4 ">
      {field.map((item: any, ind: Key) => (
        <div key={ind}>
          <Link href={`courses/${item.slug}`}>
            <div className=" cursor-pointer  ">
              <div className="overflow-hidden">
                <img
                  src={item?.image}
                  className="hover:scale-[1.2] transition-transform duration-[0.3] ease-in-out "
                />
              </div>
              <p className=" text-center font-semibold mt-[5px] ">
                {item.title}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Category;
