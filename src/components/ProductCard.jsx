

import { dayProducts } from '../data/DayProducts.js'

export default function ProductCard(){
        
    return (
    <>
    <h2 className='font-medium ml-8 text-3xl text-camel my-8'>Featured Products</h2>
    <div className='px-8 w-full grid grid-cols-5 gap-8'>
        {
        dayProducts.map((item)=>(
            <div key={item.id} className='flex flex-col gap-2 items-center p-4 bg-warmCream rounded-2xl'>
                <img className='h-[300px] object-cover object-center w-full rounded-2xl' src={item.image} alt="product-image" />
                <h3>{item.title}</h3>
                <p><i className="text-yellow-400 fa-solid fa-star"></i> 4.5</p>
                <p>{item.price}$</p>
            </div>
        ))    
        }
    </div>
    </>
    )
}