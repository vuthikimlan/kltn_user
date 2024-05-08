"use client";
import Link from "next/link";
import BadgeCart from "../Cart/Badge";
import ButtonLogin from "../Button/Login";
import ButtonRegister from "../Button/Register";
import DropdownUser from "../Dropdown/Dropdown";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { isLogin } from "@/store/appSlice";
import ButtonSearch from "../Button/Search";
import MenuField from "../Menu/MenuField";

function Header() {
  const token = Cookies.get("jwt");
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state?.app?.isLogin);

  // console.log("login", login);

  useEffect(() => {
    if (token) {
      dispatch(isLogin(true));
    } else {
      dispatch(isLogin(false));
    }
  }, []);

  return (
    <>
      <div className="flex justify-center mt-[20px] pb-[7px]  shadow-lg shadow-gray-300 ">
        {login ? (
          <>
            <Link href={"/home"} className="uppercase font-semibold mr-[2%] ">
              e-learning
            </Link>
          </>
        ) : (
          <>
            <Link href={"/"} className="uppercase font-semibold mr-[2%] ">
              e-learning
            </Link>
          </>
        )}
        {/* <MenuField /> */}
        <div className=" w-[50%] mr-[5%] ">
          <ButtonSearch />
        </div>
        <Link href={"/blog"} className=" mr-[15px] mt-[5px] ">
          Blog
        </Link>
        <Link href={"http://localhost:3001/"} className=" mr-[15px] mt-[5px] ">
          Giảng dạy
        </Link>
        <BadgeCart />
        <div className="ml-[50px]">
          {login ? (
            <>
              <DropdownUser />
            </>
          ) : (
            <>
              <ButtonLogin />
              <ButtonRegister />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
