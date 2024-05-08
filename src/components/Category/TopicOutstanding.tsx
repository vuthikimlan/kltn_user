import { getAllField } from "@/api/field";
import Link from "next/link";
import { Key } from "react";

async function TopicsOutstanding() {
  const res = await getAllField();
  let field: any[] = [];
  if (res) {
    field = res?.data?.items;
  }
  return (
    <>
      <div className="grid-cols-4 gap-2 grid text-lg ">
        {(field as any)?.map((el: any, ind: Key) => {
          return (
            <div key={ind} className="m-[13px]  ">
              <Link href={`courses/${el.slug}`}>
                <p className=" mb-[24px] font-semibold ">{el?.title} </p>
              </Link>
              <div className="   ">
                {el?.topics?.map((items: any, ind: Key) => {
                  return (
                    <div key={ind} className="mb-[24px] ">
                      <Link
                        href={`http://localhost:3000/courses/${el.slug}/${items.slug}`}
                      >
                        <p className=" text-[#5624d0] hover:text-[#401b9c] underline  underline-offset-4 ">
                          {items?.nameTopic}{" "}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TopicsOutstanding;
