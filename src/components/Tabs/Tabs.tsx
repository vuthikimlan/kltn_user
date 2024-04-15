import { Tabs } from "antd";
import { TabsProps } from "antd/lib";

interface DataType {
  label1: string;
  label2: string;
  children1: any;
  children2: any;
}

function TabsComponent({ label1, label2, children1, children2 }: DataType) {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `${label1} `,
      children: children1,
    },
    {
      key: "2",
      label: `${label2} `,
      children: children2,
    },
  ];
  return (
    <>
      <Tabs items={items} defaultActiveKey="1" />
    </>
  );
}

export default TabsComponent;
