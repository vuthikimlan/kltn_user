import Link from "next/link";
import { Key } from "react";

function ContentTopic({ dataTopic, slugField }: any) {
  const buttonWidth = 80;
  return (
    <>
      {dataTopic?.map((el: any, ind: Key) => {
        return (
          <div key={ind} className="m-[13px] ">
            <Link
              href={`http://localhost:3000/courses/${slugField}/${el.slug}`}
            >
              <p className="text-[#2d2f31] hover:text-[#401b9c] ">
                {el?.nameTopic}{" "}
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default ContentTopic;
