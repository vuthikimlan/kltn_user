import OrderCancelled from "@/components/PurchaseHistory/OrderCancelled";
import OrderCompleted from "@/components/PurchaseHistory/OrderCompleted";
import TabsComponent from "@/components/Tabs/Tabs";

function PagePurchaseHistory() {
  return (
    <div className="w-[70%] m-[auto] pt-[30px] ">
      <h1 className="text-3xl font-bold font-serif">Lịch sử mua</h1>
      <TabsComponent
        label1="Khóa học "
        label2="Đã hủy"
        children1={<OrderCompleted />}
        children2={<OrderCancelled />}
      />
    </div>
  );
}

export default PagePurchaseHistory;
