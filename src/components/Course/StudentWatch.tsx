import CarouselCourse from "./Carousel";
import { getAllCourse, getAllCourseAprrove } from "../../api/course";

async function StudentWatch() {
  // const res = await getAllCourse();
  const res = await getAllCourseAprrove();
  console.log("res", res);

  let course: any[] = [];
  if (res) {
    course = res?.data?.items?.flatMap((el: any) => {
      return el.courseId;
    });
  }

  return (
    <>
      <CarouselCourse dataCourse={course} />
    </>
  );
}

export default StudentWatch;
