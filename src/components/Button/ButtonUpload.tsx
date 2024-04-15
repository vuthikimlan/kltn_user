import { ProFormUploadButton } from "@ant-design/pro-components";
import { useState } from "react";
import { notification } from "antd";
import { uploadFile } from "@/api/user";

interface Datatype {
  name: string;
  initialValue: string | "";
  label: string;
}

function ButtonUpload({ name, initialValue, label }: Datatype) {
  const [listFile, setListFile] = useState<any[]>([]);
  const [fieldFile, setFieldFile] = useState("");

  const handleUpload = async (file: any) => {
    const res = await uploadFile(file.file);

    if (res?.data?.success) {
      setListFile([{ url: res?.data?.data }]);
      setFieldFile(res?.data?.data);
      notification.success({
        message: "Tải file lên thành công",
      });
    } else {
      notification.error({
        message: "Tải file lên không thành công",
      });
    }
  };

  return (
    <>
      <ProFormUploadButton
        name={name}
        initialValue={initialValue}
        label={label}
        title="Click to upload"
        fileList={listFile}
        transform={(value) => ({
          [name]: fieldFile || "",
        })}
        fieldProps={{
          listType: "picture-card",
          method: "POST",
          name: "file",
          customRequest: handleUpload,
          multiple: true,
          onRemove: () => setListFile([]),
          openFileDialogOnClick: true,
          onChange: (file) => {},
        }}
        action="http://localhost:8000/file/upload"
      />
    </>
  );
}

export default ButtonUpload;
