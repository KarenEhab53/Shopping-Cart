import React from "react";
import { useCart } from "../Context/CartContext"

const CartButtons = ({item}) => {
  const {addToCart,removeFromCart,updateItemQuantity}=useCart()
  return <div className="w-max absolute right-5 top-5">
    <div className="space-x-3">
      {!item.inCart?(<button onClick={() => {if (!item) {console.error("Item is undefined!")}
    console.log("Adding to cart:", item)
    addToCart(item)}} type="button" className="cursor-pointer bg-zinc-400 border rounded-md px-2 py-1 text-sm text-white hover:bg-zinc-500 transition-colors duration-500">+ Add to cart </button>
):(
  <div>
    <div className="flex">
      <button className="cursor-pointer border rounded-lg px-3" 
      onClick={()=>{
        if(item.quantity===1){
          removeFromCart(item);
        }
        else{
          updateItemQuantity(item,-1);
        }
      }}
      >-</button>
      <p className="flex items-center gap-x-1 mx-1">
        <span className="min-w-7 bg-green-100 grid place-items-center border rounded-full">{item.quantity}</span>
        <span className="text-xs">in cart</span>
        <button className="cursor-pointer border rounded-lg px-3" onClick={()=>{
          updateItemQuantity(item,1);}}>+</button>
      </p>
    </div>
    <button className=" cursor-pointer bg-pink-300 mx-auto mt-2 block rounded-md px-2 py-1 text-xs text-white hover:bg-pink-400" onClick={()=> removeFromCart(item)} >Remove</button>
  </div>
)}
    
    </div>
  </div>
};

export default CartButtons;
