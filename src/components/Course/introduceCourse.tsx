import { Avatar, Skeleton } from "antd";

function IntroduceCourse({ course }: any) {
  // Nếu course không có dữ liệu thì sẽ hiển thị loading
  if (!course) {
    return (
      <div>
        <Skeleton active />
      </div>
    );
  }
  const countUser = course?.users?.length || 0;
  const constLecture = course?.totalLecture || 0;
  return (
    <>
      <div>
        <h1 className="text-[#2d2f31] text-2xl font-semibold mt-[15px] ">
          Giới thiệu khóa học
        </h1>
        <p className=" mt-[16px] mb-[32px]">{course?.description}</p>
        {/* Lấy phần mô tả của khóa học */}
        <div className="mt-[20px] border-t-[1px] border-solid border-[#e4e8eb] flex justify-between p-[20px] ">
          <p>Theo số liệu</p>
          <div>
            <p>{course?.level}</p>
            <p>Học viên: {countUser} </p>
          </div>
          <div>
            <p>Bài giảng: {constLecture}</p>
            <p>Video: {course?.totalTimeCourse} phút</p>
          </div>
        </div>
        <div className="mt-[20px] border-t-[1px] border-solid border-[#e4e8eb] flex justify-between p-[20px] ">
          <p>Mô tả</p>
          <div>
            <p className="w-[43rem] ">{course?.detailsCourse}</p>
          </div>
        </div>
        <div className="mt-[20px] border-t-[1px] border-solid border-[#e4e8eb] flex justify-between p-[20px] ">
          <p>Giảng viên</p>
          <div>
            <Avatar></Avatar>
            <div>
              <p>{course?.createdBy?.name}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroduceCourse;
