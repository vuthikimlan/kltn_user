import Link from "next/link";
import { dataCourse } from "../DataDemo";

interface Datatype {
  name: string | null | undefined;
  image: string | undefined;
  author: string | null | undefined;
  price: number | null | undefined;
}

function MyCourses() {
  let slug = "";
  return (
    <>
      <div className="mx-[10%] ">
        {dataCourse.map((items: Datatype, ind: any) => {
          return (
            <div key={ind}>
              <Link
                href={`/my-course/${slug}`}
                className=" hover:cursor-pointer mt-[10%] mx-auto"
              >
                <div className="border-b-[1px] border-solid border-[#e4e8eb] mt-[10px] w-[63rem] ">
                  <div className="flex justify-between my-[20px] ">
                    <img
                      src={items.image}
                      alt=""
                      className=" w-[240px] h-[135px] "
                    />
                    <div className=" ">
                      <p className="font-semibold">{items.name} </p>
                      <p className="w-[40rem] sm ">
                        Become a Full-Stack Web Developer with just ONE course.
                        HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and
                        DApps
                      </p>
                      <span className="text-xs ">Bởi {items.author}</span>
                      <div className="flex text-xs my-[5px] ">
                        <p>4,9 sao</p>
                        <p className="ml-[10px] ">(1) </p>
                      </div>
                      <ul className="flex list-disc text-xs ">
                        <li className="ml-[15px] "> Tổng số 28 giờ </li>
                        <li className="ml-[20px] "> 191 bài giảng </li>
                        <li className="ml-[20px] ">Trình độ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MyCourses;
