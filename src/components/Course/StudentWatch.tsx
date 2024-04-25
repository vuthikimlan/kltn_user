import CarouselCourse from "./Carousel";
import { getAllCourse } from "../../api/course";

async function StudentWatch() {
  const res = await getAllCourse();

  let course: any[] = [];
  if (res) {
    course = res?.data?.items.slice(0, 10);
  }

  return (
    <>
      <CarouselCourse dataCourse={course} />
    </>
  );
}

export default StudentWatch;
