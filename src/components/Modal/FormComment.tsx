import { postComment } from "@/api/comment";
import { modalClose } from "@/store/appSlice";
import {
  ModalForm,
  ProForm,
  ProFormRate,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";

function FormComment({ courseId, getcomment }: any) {
  const modalOpen = useSelector((state: any) => state.app.openModal);
  const dispatch = useDispatch();

  const hiddenModal = () => {
    dispatch(modalClose());
  };

  const onFinish = async (values: any) => {
    postComment(courseId, values).then((res) => {
      if (res?.data?.success === true) {
        message.success("Đánh giá khóa học thành công");
        hiddenModal();
      }
    });
  };
  return (
    <>
      <ModalForm
        title="Đánh giá khóa học"
        open={modalOpen}
        onOpenChange={(open) => {
          if (!open) {
            hiddenModal();
          }
        }}
        modalProps={{
          destroyOnClose: true,
        }}
        width={400}
        onFinish={onFinish}
      >
        <ProForm.Group>
          <ProFormRate name="star" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormTextArea
            width="md"
            name="comment"
            label="Nội dung đánh giá"
            placeholder="comment"
            rules={[
              {
                required: true,
                message: "Nội dung đánh giá không được để trống",
              },
            ]}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default FormComment;
