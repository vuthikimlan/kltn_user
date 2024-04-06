import Link from "next/link";
import { Key } from "react";

function MenuTopic({ dataTopic, slugField }: any) {
  return (
    <>
      <div className=" flex  ">
        {dataTopic?.map((el: any, ind: Key) => {
          return (
            <div key={ind} className="m-[13px] pl-[40px] ">
              <Link
                href={`http://localhost:3000/courses/${slugField}/${el.slug}`}
              >
                <p>{el?.nameTopic} </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MenuTopic;
