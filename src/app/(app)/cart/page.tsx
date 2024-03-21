import MyCart from "@/components/Cart/MyCart";

function CartPage() {
  return (
    <div className="w-[70%] m-[auto] pt-[30px] ">
      <h1 className="text-3xl font-bold font-serif">Giỏ hàng</h1>
      <MyCart />
    </div>
  );
}

export default CartPage;
