
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

let btnStyle = 'bg-blue-100 cursor-pointer rounded-full flex items-center justify-center w-10 h-10 text-2xl text-blue-700 transition-all duration-200 hover:scale-110 active:scale-100'

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

    const { products , setProducts } = useContext(CartContext)

    return(
        <div className='flex gap-6 items-center flex-col p-6'>
            <div className='flex w-full justify-between'>
                <h2 className='text-camel text-3xl font-semibold'>Shopping Cart</h2>
                <Link to="/" className="border-[2px] py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-100">Back <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
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