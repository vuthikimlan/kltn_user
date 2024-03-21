import MyCourses from "@/components/Course/MyCourse";

function MyCourse() {
  return (
    <>
      <div>
        <div className="bg-[#2d2f31] text-[#fff] py-[32px]">
          <h1 className=" font-bold text-3xl w-[50%] m-[auto] font-serif ">
            Học tập
          </h1>
        </div>
        <MyCourses />
      </div>
    </>
  );
}

export default MyCourse;
