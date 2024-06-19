import { Tabs } from "antd";
import { TabsProps } from "antd/lib";

function TabsComponent({
  label1,
  label2,
  label3,
  children1,
  children2,
  children3,
}: any) {
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
    {
      key: "3",
      label: `${label3} `,
      children: children3,
    },
  ];
  return (
    <>
      <Tabs items={items} defaultActiveKey="1" />
    </>
  );
}

export default TabsComponent;
