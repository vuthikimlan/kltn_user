"use client";
/* eslint-disable @next/next/no-async-client-component */
import CommentCourse from "../Comment/Comment";
import CollapseCourse from "./Collapse/Collapse";
import ButtonAddCart from "../Button/AddCart";
import { useParams } from "next/navigation";
import { getCourseBySlug } from "@/api/course";
import { CheckOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";

async function DetaileCourse() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const res = await getCourseBySlug(slug);
  let course: any = {};
  if (res) {
    course = res?.data;
  }

  if (!course) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#2d2f31] text-[#fff] py-[32px] relative ">
        <div className="banner w-[50%] m-[auto]">
          <h1 className=" text-3xl font-bold w-[65%] mb-[16px]  ">
            {course?.name}
          </h1>
          <p className="mb-[24px] font-sans ">{course?.description}</p>
          <div className="font-sans text-sm">
            <span className="mr-[10px] font-sans ">{course?.totalRatings}</span>
            <span className="mr-[10px] font-sans ">
              {course?.userRatings} xếp hạng
            </span>{" "}
            {/* Tính tổng số các đánh giá của khóa học - có thể link đến phần đánh giá */}
            <span className="mr-[10px] font-sans ">
              {course?.users?.length} học viên
            </span>{" "}
            {/* Tính tổng số lượng các học viên của khóa học */}
            <br />
            <p className="font-sans mt-[10px] ">{`Được tạo bởi ${course?.createdBy?.name} `}</p>
            {/* Có thể link đến phần giới thiệu của tác giả */}
          </div>
        </div>

        {/* <img
          src="https://img-c.udemycdn.com/course/240x135/5391834_7008_2.jpg"
          className="absolute"
        /> */}
      </div>
      <div className="w-[50%] m-[auto] ">
        <div className="pt-[24px] mb-[32px]  ">
          <div className=" border-[1px] border-solid pt-[24px] pb-[26px] px-[10px] ">
            <h1 className="ml-[24px] text-xl font-semibold  mb-[10px]  ">
              Nội dung bài học
            </h1>
            <ul className=" grid-cols-2 grid gap-2 ">
              {course?.lessonContent?.map((el: any, ind: any) => {
                return (
                  <div key={ind} className="flex items-baseline ">
                    <CheckOutlined className="mt-[6px] " />
                    <li className="ml-[10px] mb-[5px] text-sm ">{el} </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className=" mb-[20px] ">
          <div className="mb-[25px] contentCourse ">
            <h1 className=" text-xl font-semibold mb-[16px] ">
              Nội dung khóa học
            </h1>
            <CollapseCourse
              data={course?.parts}
              numPart={course?.parts.length}
              totalTime={course?.totalTimeCourse}
            />
          </div>
          <div className="mb-[25px] requestCourse ">
            {/* Lấy dữ liệu từ điều kiện tham gia */}
            <h1 className=" text-xl font-semibold mb-[16px] ">Yêu cầu</h1>
            <ul className="list-disc ml-[20px] ">
              {course?.conditionParticipate?.map((el: any, ind: any) => {
                return (
                  <div key={ind} className="flex items-baseline ">
                    <li className="ml-[10px] mb-[5px] ">{el} </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="mb-[25px] descriptionCourse ">
            <h1 className=" text-xl font-semibold mb-[16px] ">Mô tả</h1>
            <p>
              React.JS là một thư viện, framework giúp xây dựng một website hiện
              đại, có tính mở rộng và hiệu năng cực lớn. Các sản phẩm tiêu biểu
              sử dụng React có thể kể đến như Facebook và Instagram. Được
              Facebook chống lưng, cũng như đầu tư mạnh mẽ, cộng với một cộng
              đồng đông đảo sử dụng, React chính là thư viện Frontend phổ biến
              nhất hiện nay, bỏ xa Vue và Angular. Với tên gọi React ULTIMATE -
              mục tiêu đề ra của khóa học, đấy chính là nó là phiên bản cuối
              cùng, là thứ DUY NHẤT các bạn cần, cũng như cập nhật MỚI NHẤT &
              ĐẦY ĐỦ NHẤT cho người mới bắt đầu, muốn có một góc nhìn thực sự
              chính xác về React.JS. Ngoài ra, khi kết thúc khóa học, các bạn
              mới bắt đầu sẽ có đủ tự tin để làm chủ React, cũng như hiểu được,
              nắm vững được những kiến thức cốt lõi nhất để có thể xây dựng,
              phát triển một website thực tế với React.JS. Khóa học sẽ thực sự
              bổ ích cũng như mang lại rất nhiều kiến thức cho các bạn mới bắt
              đầu. Với phương châm, học đi đôi với thực hành, chúng ta chỉ học
              chỉ học những kiến thức code lỗi nhất, hi vọng các bạn sẽ học hỏi
              được nhiều kiến thức, cũng như tự tin sử dụng React cho công việc
              của mình.
            </p>
          </div>
          <div className="mb-[25px] objectCourse ">
            <h1 className=" text-xl font-semibold mb-[16px] ">
              {" "}
              Đối tượng của khóa học này:{" "}
            </h1>
            <ul className="list-disc ml-[20px] ">
              {course?.object?.map((el: any, ind: any) => {
                return (
                  <div key={ind} className="flex items-baseline ">
                    <li className="ml-[10px] mb-[5px] ">{el} </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="w-[35%] m-[auto] ">
            <ButtonAddCart courseId={course?._id} />
          </div>
        </div>
        <CommentCourse
          data={course?.ratings}
          totalRating={course?.totalRatings}
          ratings={course?.userRatings}
        />
      </div>
    </>
  );
}

export default DetaileCourse;
