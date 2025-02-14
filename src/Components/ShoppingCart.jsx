import React from "react";
import { ShoppingCartIcon,XIcon } from "lucide-react";

const ShoppingCart = () => {
  return <>
  <div className=" w-[300px] h-screen bg-gray-200 fixed right-0 top-0 z-30  rounded-tl-lg">
    <div className="w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center  rounded-lg">
        <h1 className="text-xl text-gray-600">Shopping Cart</h1>
        <button className="w-9 h-9 bg-yellow-400 absolute right-3 z-20 grid place-items-center  rounded-full hover:bg-yellow-500 transition-colors"><XIcon/></button>
    </div>
    <button></button>
  </div>
  </>;
};

export default ShoppingCart;
