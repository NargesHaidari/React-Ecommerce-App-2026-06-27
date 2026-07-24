import { createContext, useState , useEffect } from "react";

export const CartContext = createContext()



export function CartProvider({ children }){
        let [products , setProducts] = useState(()=>{

            let savedProducts = localStorage.getItem('products')
            return savedProducts ? JSON.parse(savedProducts) : []

        })

        useEffect(()=>{

            localStorage.setItem('products', JSON.stringify(products))

        }, [products])


        function addToCart(item){
            let exists = products.find((product)=>(product.id == item.id))

            if(exists){
                setProducts(
                    products.map(product =>(
                        product.id == item.id ? {...product , quantity: product.quantity+1} : product
                    ))
                )
            }else{
                setProducts([...products , {...item , quantity:1}])
            }
        }

        return(
            <CartContext.Provider value={{products , setProducts , addToCart}}>
                {children}
            </CartContext.Provider>
        )
}