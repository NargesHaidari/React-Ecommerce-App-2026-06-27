import shoes from '../../assets/2.png'
import mobile from '../../assets/3.png'
import headphones from '../../assets/4.png'


import { createContext, useState } from "react";

export const CartContext = createContext()

let product = [
    {
        id : 100,
        title : "shoes",
        image : shoes,
        rating : 3.9,
        price : 45,
        quantity : 1,
    },
    {
        id : 101,
        title : "mobile",
        image : mobile,
        rating : 4.1,
        price : 300,
        quantity : 1,
    },
    {
        id : 102,
        title : "headphones",
        image : headphones,
        rating : 4.2,
        price : 240,
        quantity : 1,
    },
]

export function CartProvider({ children }){
        let [products , setProducts] = useState(product)

        return(
            <CartContext.Provider value={{products , setProducts}}>
                {children}
            </CartContext.Provider>
        )
}