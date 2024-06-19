"use client";

import { getActiveCourse } from "@/api/course";
import { Button, Result } from "antd";
import { useRouter } from "next/navigation";

function ActiveCoursePage(params: any) {
  const router = useRouter();

  const userId = params.searchParams.userId;
  const courseId = params.searchParams.courseId;
  return (
    <div className="mt-[12%] w-[32%] mx-[auto] text-center  ">
      <Result
        status="success"
        title="Khóa học của bạn đã được kích hoạt thành công"
        subTitle="Khóa học của bạn đã được kích hoạt, bạn có thể bắt đầu học ngay bây giờ."
        extra={[
          <Button
            key="redirec"
            onClick={() => {
              getActiveCourse(userId, courseId).then((res) => {
                // console.log(res);
                router.push("/home");
              });
              // router.push("/home");
            }}
          >
            Quay về trang chủ
          </Button>,
        ]}
      />
      {/* <p>Kích hoạt khóa học khóa học thành công</p>
      <Button
        onClick={() => {
          getActiveCourse();
          router.push("/home");
        }}
      >
        Quay lại trang chủ
      </Button> */}
    </div>
  );
}

export default ActiveCoursePage;
