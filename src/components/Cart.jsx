
import shoes from '../assets/2.png'
import mobile from '../assets/3.png'
import headphones from '../assets/4.png'
import { useState } from 'react'

let btnStyle = 'bg-blue-100 cursor-pointer rounded-full flex items-center justify-center w-10 h-10 text-2xl text-blue-700 transition-all duration-200 hover:scale-110 active:scale-100'

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

function handleQuantity(products , setProducts , id , change){
    setProducts(
        products.map((product)=>(
            product.id == id ? {...product , quantity:Math.max(1 , product.quantity + change)} : product
        ))
    )
}

function handleRemove(products , setProducts , id){
    setProducts(
        products.filter(product => product.id !== id)
    )
}

export default function Cart(){

    let [products , setProducts] = useState(product)

    return(
        <div className='flex gap-6 items-center flex-col p-6'>
            <h2 className='text-camel text-3xl font-semibold'>Shopping Cart</h2>
            <div className='flex flex-wrap gap-x-3 gap-y-6 justify-center'>
                {
                products.map((item)=>(
                    <div className='pb-4 shadow-lg flex gap-2 flex-col items-center rounded-sm overflow-hidden w-60' key={item.id}>
                        <div className='h-70 w-full overflow-hidden'><img className='w-full h-full object-center object-cover'  src={item.image} alt="product-image" /></div>
                        <p className='font-semibold text-2xl'>{item.title}</p>
                        <p>{item.rating}<i className="text-yellow-400 fa-solid fa-star"></i></p>
                        <p className='text-blue-700 border-b font-bold text-2xl'>${item.price}</p>
                        <p className='text-gray-700'>Total: <span className='text-black text-lg font-semibold'>${item.price * item.quantity}</span></p>
                        <div className='flex gap-4 items-center justify-center'>
                            <button onClick={()=>{handleQuantity(products , setProducts , item.id , -1)}} className={btnStyle}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={()=>{handleQuantity(products , setProducts , item.id , 1)}} className={btnStyle}>+</button>
                        </div>
                        <button onClick={()=>{handleRemove(products , setProducts , item.id)}} className='cursor-pointer border-2 border-red-500 text-red-500 w-50 py-1 text-lg mt-3 font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-100'><i className="text-red-500 mr-2 fa-solid fa-trash"></i>Remove</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}