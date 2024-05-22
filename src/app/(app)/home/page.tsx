import JoiningCourse from "@/components/Course/JoiningCourse";
import TopCourse from "@/components/Course/TopCourse";
import MenuCategory from "@/components/Menu/MenuCategory";

function Home() {
  return (
    <>
      <MenuCategory />
      <div className="mx-[10%]">
        <JoiningCourse />
        <TopCourse />
      </div>
    </>
  );
}

export default Home;
