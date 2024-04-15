/* eslint-disable @next/next/no-img-element */
import { Button, Tabs, TabsProps } from "antd";
import teacher from "../../../../public/teacher.jpg";
import teaching from "../../../../public/value-prop-teach-v3.jpg";
import inspire from "../../../../public/value-prop-inspire-v3.jpg";
import rewardes from "../../../../public/value-prop-get-rewarded-v3.jpg";
import ButtonStartTeacher from "@/components/Button/StartTeacher";

function PageTeaching() {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Lên kế hoạch cho khung chương trình ",
      children: (
        <div className=" flex ">
          <div className=" w-[37%] text-xl mt-[20px] ">
            <p className=" mb-[10px]  ">
              Hãy bắt đầu với niềm đam mê và kiến thức của bạn. Sau đó, bạn có
              thể chọn một chủ đề triển vọng với sự trợ giúp của công cụ Thông
              tin chi tiết về thị trường.
            </p>
            <p>
              Bạn là người quyết định phương pháp cũng như kiến thức giảng dạy.
            </p>
          </div>
          <img
            src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
            alt=""
          />
        </div>
      ),
    },
    {
      key: "2",
      label: " Quay video",
      children: (
        <div className=" flex ">
          <div className=" w-[37%] text-xl mt-[20px] ">
            <p className=" mb-[10px]  ">
              Sử dụng các công cụ cơ bản như điện thoại thông minh hoặc camera
              DSLR. Thêm một chiếc micrô tốt là bạn đã sẵn sàng bắt đầu.
            </p>
            <p>
              Nếu không thích xuất hiện trên camera, bạn chỉ cần ghi lại màn
              hình của mình. Dù với cách nào thì bạn cũng nên quay video dài từ
              2 tiếng trở lên cho khóa học có trả phí.
            </p>
          </div>
          <img
            src="https://s.udemycdn.com/teaching/record-your-video-v3.jpg"
            alt=""
          />
        </div>
      ),
    },
    {
      key: "3",
      label: "Ra mắt khóa học",
      children: (
        <div className=" flex ">
          <div className=" w-[37%] text-xl mt-[20px] ">
            <p className=" mb-[10px]  ">
              Thu thập các xếp hạng và đánh giá đầu tiên bằng cách quảng bá khóa
              học trên mạng xã hội và mạng lưới nghề nghiệp của bạn.
            </p>
            <p>
              Người dùng sẽ dễ dàng khám phá khóa học của bạn trên cổng khóa học
              của chúng tôi. Đây là nơi bạn kiếm được doanh thu từ mỗi lượt ghi
              danh có trả phí.
            </p>
          </div>
          <img
            src="https://s.udemycdn.com/teaching/launch-your-course-v3.jpg"
            alt=""
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="  relative ">
        <img src={teacher.src} alt="teacher" className="w-full h-[455px] " />
        <div className=" absolute bottom-[5rem] pl-[10%]  w-[27rem] tracking-wide leading-loose ">
          <h1 className=" text-4xl font-semibold font-serif  subpixel-antialiased ">
            Hãy đến giảng dạy với chúng tôi
          </h1>
          <p className="mb-[15px] ">
            Trở thành giảng viên và thay đổi cuộc sống của mọi người, bao gồm cả
            cuộc sống của chính bạn
          </p>
          <ButtonStartTeacher />
        </div>
      </div>
      <div className="mx-[4rem] py-[88px] px-[24px] ">
        <h1 className="  text-4xl font-semibold font-mono  subpixel-antialiased text-center mb-[32px] ">
          Có quá nhiều lý do để bắt đầu
        </h1>
        <div className="grid-cols-3 grid gap-14 mt-[50px] ">
          <div className=" text-center ">
            <img src={teaching.src} alt="" className=" mx-auto " />
            <h2 className="text-xl font-semibold ">
              Giảng dạy theo cách của bạn{" "}
            </h2>
            <p>
              Xuất bản khóa học mong muốn, theo cách mong muốn và bạn luôn có
              quyền kiểm soát nội dung của riêng mình.
            </p>
          </div>

          <div className=" text-center ">
            <img src={inspire.src} alt="" className=" mx-auto " />
            <h2 className="text-xl font-semibold ">
              Truyền cảm hứng cho học viên{" "}
            </h2>
            <p>
              Dạy những gì bạn biết và giúp học viên khám phá sở thích, tiếp thu
              kỹ năng mới và thăng tiến trong sự nghiệp của họ.
            </p>
          </div>

          <div className=" text-center ">
            <img src={rewardes.src} alt="" className=" mx-auto " />
            <h2 className="text-xl font-semibold ">Nhận phần thưởng </h2>
            <p>
              Mở rộng mạng lưới nghề nghiệp, xây dựng kiến thức chuyên môn và
              kiếm thu nhập từ mỗi lượt ghi danh có trả phí.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[4rem] py-[20px] px-[24px] ">
        <h1 className="  text-4xl font-semibold font-mono  subpixel-antialiased text-center mb-[32px] ">
          Cách thức để bắt đầu
        </h1>
        <div className="w-[60%] m-auto ">
          <Tabs items={items} defaultActiveKey="1" />
        </div>
      </div>
      <div className=" bg-[#f7f9fa] text-center  py-[88px] px-[24px]  ">
        <h1 className=" text-4xl font-semibold font-serif subpixel-antialiased pb-[20px]  ">
          Trở thành giảng viên ngay hôm nay
        </h1>
        <div className="w-[20%] m-auto ">
          <ButtonStartTeacher />
        </div>
      </div>
    </>
  );
}

export default PageTeaching;
