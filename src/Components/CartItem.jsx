import React from "react";
import CartButtons from "./CartButtons";

const CartItem = ({item}) => {
    const{id,name,imageUrl,price}=item;

  return <div key={id} className=" group relative flex flex-col gap-y-2 border border-zinc-200 rounded-md bg-white p-24">
    <img src={imageUrl} alt="product image" className="group-hover:translate-y-2 transition-all duration-500 w-2xs h-72"/>
    <div className="absolute bottom-5 left-5">
        <h1 className=" to-zinc-700 text-sm">{name}</h1>
        <span className=" text-pink-400 text-sm">${price}</span>
    </div>
    <CartButtons item={item}/>
  </div>;
};

export default CartItem;
