import Link from "next/link";
import { getAllField } from "@/api/field";
import { Key } from "react";
import TopCourseByField from "./Field/TopCourseByField";

async function TopCourse() {
  const res = await getAllField();
  let field = [];
  if (res) {
    field = res?.data?.items;
  }

  return (
    <>
      {field?.map((items: any, ind: Key) => (
        <div className="mt-[5%] " key={ind}>
          <h1 className=" mb-[20px] text-3xl text-[#2d2f31] font-semibold ">
            Các khóa học hàng đầu về{" "}
            <Link
              href={`courses/${items.slug}`}
              className=" border-b-[1px] border-solid text-[#8072e6] border-[#8072e6] "
            >
              {items?.title}
            </Link>{" "}
          </h1>
          <TopCourseByField slug={items.slug} />
        </div>
      ))}
    </>
  );
}

export default TopCourse;
