import React from "react";
import MenuBar from "../menu";
import Search from "../search";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-2 items-center">
      <div className="flex flex-row justify-between p-2 items-center" >
        <div className="font-bold mr-7 text-xl">Expeed</div>

        <Search />
      </div>

      <div className="flex">
        <Link href={'/serviceProviders/orderPages/createOrderPage'}>
        <button  className="bg-indigo-600 text-white rounded-md p-2 m-2 shadow-md"> New Order</button>

        </Link>

        <MenuBar />
      </div>

    </div>
  );
}

export default Navbar;