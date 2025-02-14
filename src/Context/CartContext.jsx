import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allItems, setAllItems] = useState(allProducts || []); // ✅ Ensure initial state

    // ✅ Prevent duplicate items
    const addItems = (items) => {
        setAllItems((prevItems) => {
            const newItems = items.filter(
                (newItem) => !prevItems.some((prevItem) => prevItem.id === newItem.id)
            );
            return [...prevItems, ...newItems];
        });
    };

    // ✅ Properly update `inCart` without adding duplicates
    const addToCart = (item) => {
        setAllItems((prevItems) => {
            return prevItems.map((prevItem) =>
                prevItem.id === item.id ? { ...prevItem, inCart: true } : prevItem
            );
        });
    };
    

    // ✅ Remove item from cart
    const removeFromCart = (item) => {
        setAllItems((prevItems) =>{
            return prevItems.map((prevItem) =>{

                return prevItem.id === item.id? {...prevItem, inCart: false, quantity:1 } : prevItem;
            })
        })
    }

    // ✅ Update item quantity
    const updateItemQuantity = (cartItem, amount) => {
        setAllItems((prevItems) => {
            return prevItems.map((item) =>
                item.id === cartItem.id? {...item, quantity: item.quantity + amount } : item
            );
        });

    }
    

    return (
        <CartContext.Provider value={{ allItems, addItems, addToCart,removeFromCart,updateItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
