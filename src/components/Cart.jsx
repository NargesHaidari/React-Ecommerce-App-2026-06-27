
import shoes from '../assets/2.png'
import mobile from '../assets/3.png'
import headphones from '../assets/4.png'
import { useState } from 'react'

let btnStyle = 'bg-blue-100 cursor-pointer rounded flex items-center justify-center w-8 h-6 text-2xl transition-all duration-200 hover:scale-110 active:scale-100'

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
    }
]

export default function Cart(){

    let [products , setProducts] = useState(product)

    return(
        <div className='flex gap-6 items-center flex-col p-6'>
            <h2 className='text-camel text-3xl font-semibold'>Shopping Cart</h2>
            <div className='flex flex-wrap gap-3'>
                {
                product.map((item)=>(
                    <div className='pb-4 shadow-lg flex gap-2 flex-col items-center rounded-sm overflow-hidden w-50' key={item.id}>
                        <div className='h-70 w-full overflow-hidden'><img className='w-full h-full object-center object-cover'  src={item.image} alt="product-image" /></div>
                        <p>{item.title}</p>
                        <p>{item.rating}<i className="text-yellow-400 fa-solid fa-star"></i></p>
                        <p>{item.price}$</p>
                        <p>Total: {item.price * item.quantity}</p>
                        <div className='flex gap-4 items-center justify-center'>
                            <p>{item.quantity}</p>
                            <div className='flex gap-2'>
                                <button onClick={()=>{item.quantity + 1}} className={btnStyle}>+</button>
                                <button className={btnStyle}>-</button>
                            </div>
                        </div>
                        <button className='bg-blue-100 cursor-pointer border-2 border-blue-300 px-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-100'>Remove</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}