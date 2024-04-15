import { registerTeacher } from "@/api/auth";
import { ModalForm, ProForm, ProFormText } from "@ant-design/pro-components";
import { useRef } from "react";

function PageFormRegisterTeacher({ openModal, onOpenChange, onSuccess }: any) {
  const formRef = useRef(null);

  const onFinish = async (values: any) => {
    registerTeacher(values).then((res) => {
      if (res?.data?.success === true) {
        onSuccess();
      }
    });
  };

  return (
    <>
      <ModalForm
        title="Đăng ký trở thành giảng viên ngay hôm nay "
        open={openModal}
        onOpenChange={onOpenChange}
        formRef={formRef}
        modalProps={{
          destroyOnClose: true,
        }}
        width={400}
        onFinish={onFinish}
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            label="Họ và tên"
            placeholder="Họ và tên"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ tên ",
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="username"
            label="Username"
            placeholder="Username"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập username ",
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText.Password
            width="md"
            name="password"
            label="Mật khẩu"
            placeholder="Mật khẩu"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu ",
              },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="md"
            name="email"
            label="Email"
            placeholder="Email"
            rules={[
              {
                type: "email",
                message: "E-mail không hợp lệ",
              },
              {
                required: true,
                message: "Vui lòng nhập E-mail của bạn",
              },
            ]}
          />
        </ProForm.Group>
      </ModalForm>
    </>
  );
}

export default PageFormRegisterTeacher;
