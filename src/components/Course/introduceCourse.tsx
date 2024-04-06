import { Avatar } from "antd";

function IntroduceCourse({ course }: any) {
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
            <p>Học viên: 300</p>
          </div>
          <div>
            <p>Bài giảng: {course?.totalLecture}</p>
            <p>Video: 1.5 giờ</p>
          </div>
        </div>
        <div className="mt-[20px] border-t-[1px] border-solid border-[#e4e8eb] flex justify-between p-[20px] ">
          <p>Mô tả</p>
          <div>
            <p className="w-[43rem] ">
              Bạn hào hứng với việc tạo một khóa học trên Udemy nhưng không biết
              nên bắt đầu từ đâu? Bạn có muốn chắc chắn rằng khóa học mà bạn tạo
              sẽ thu hút học viên không? Vậy thì bạn đã đến đúng nơi rồi đấy.
              Giới thiệu, khóa học chính thức của Udemy về cách tạo khóa học
              online Trong khóa học chính thức này, chúng tôi sẽ hướng dẫn bạn
              thực hiện quy trình tạo khóa học được đề xuất, chia sẻ các phương
              pháp hay nhất về giảng dạy và thiết kế bài giảng cũng như các tài
              nguyên mà bạn có thể sử dụng để giúp bạn lập kế hoạch, sản xuất và
              xuất bản một khóa học riêng. Xây dựng khóa học là một hành trình
              nhưng bạn không cần phải đi một mình! Chúng tôi luôn sẵn lòng
              hướng dẫn bạn trong suốt hành trình này. Học hỏi từ một trong các
              chuyên gia thiết kế bài giảng của chúng tôi, người đã hợp tác với
              hàng trăm giảng viên để xây dựng khóa học chất lượng cao trên
              Udemy. Họ sẽ hướng dẫn bạn thực hiện các bước trong quy trình tạo
              khóa học cùng với nhiều giảng viên giàu kinh nghiệm, những người
              sẽ chia sẻ bí quyết tạo trải nghiệm học online ấn tượng trên
              Udemy. Đánh dấu ngay, xem lại sau Chúng tôi sẽ chia sẻ rất nhiều
              thông tin và tài nguyên hữu ích trong suốt khóa học này. Hãy đánh
              dấu khóa học để bạn có thể xem lại khi cần trên hành trình trở
              thành giảng viên của riêng bạn. Tìm hiểu cách tạo khóa học trong
              90 phút Trong khóa học kéo dài 90 phút này, các bài giảng chứa đầy
              thông tin bổ ích sẽ mang đến cho bạn thông tin chi tiết và các
              công cụ để giúp quá trình tạo khóa học diễn ra suôn sẻ nhất có
              thể, nhờ đó bạn sẽ tự tin giảng dạy một khóa học online chất lượng
              cao mà các học viên sẽ yêu thích. Chúng tôi cũng sẽ cung cấp cả
              hoạt động thực hành cho trải nghiệm học thực tiễn để bạn có thể áp
              dụng trực tiếp vào khóa học đang xây dựng. Xem hướng dẫn từng bước
              Khi khóa học kết thúc, bạn sẽ sẵn sàng bắt đầu tạo khóa học, cũng
              như hiểu rõ các bước cần làm để tạo khóa học online. Lập kế hoạch
              cho nội dung Sử dụng công cụ Thông tin chi tiết về thị trường của
              Udemy để chọn chủ đề khóa học hay nhất Lập kế hoạch cho hoạt động
              học tập và bài đánh giá để xác định đối tượng của khóa học mà bạn
              đang tạo, học viên sẽ đạt được những gì sau khi hoàn thành khóa
              học và cách họ sẽ học Tạo đề cương khóa học để xây dựng cấu trúc
              cho khóa học Soạn kịch bản để giúp bạn chuẩn bị ghi hình cho khóa
              học
            </p>
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
