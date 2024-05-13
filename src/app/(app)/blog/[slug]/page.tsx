import BlogByField from "@/components/Blog/BlogByField";
import MenuBlog from "@/components/Menu/MenuBlog";

function PageBlogByField() {
  return (
    <div className="mb-[12rem] ">
      <MenuBlog />
      <BlogByField />
    </div>
  );
}

export default PageBlogByField;
