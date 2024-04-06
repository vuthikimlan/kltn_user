import Banner from "@/components/Banner/Banner";
import TopCourse from "@/components/Course/TopCourse";
import MenuCategory from "@/components/Menu/MenuCategory";

function Home() {
  return (
    <>
      <MenuCategory />
      <div className="mx-[10%]">
        <Banner />
        <TopCourse />
      </div>
    </>
  );
}

export default Home;
