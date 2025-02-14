import React, { useEffect } from "react";
import { allProducts } from "./assets";
import CartItem from "./Components/CartItem";
import { useCart } from "./Context/CartContext"; // Ensure correct import
import ShoppingCart from "./Components/ShoppingCart";

const App = () => {
  const { allItems, addItems } = useCart(); 

  useEffect(() => {
    addItems(allItems);
    console.log(allItems)
  }, []);  

  return ( 
    <div className="grid place-items-center p-28">
      <h1 className="text-5xl italic text-gray-500 mb-16">
        Trend Alert: Must-have Outfits of the Season
      </h1>
      <ShoppingCart/>
      <div className="grid grid-cols-3 place-items-start gap-10">
        {allItems.length > 0 ? (
          allItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p>Loading products...</p> 
        )}
      </div>
    </div>
  );
};

export default App;
