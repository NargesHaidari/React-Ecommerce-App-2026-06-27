



import { products } from '../data/DayProducts.js'
import ProductCard from './ProductCard.jsx'

export default function FeaturedProducts(){
        
    return (
    <div>
    <div className='flex justify-between flex-wrap py-8 px-6 gap-4'>
        <h2 className='font-medium min-w-96 text-3xl text-camel inline-flex'>Featured Products</h2>
        <a href="" className="ml-auto border-[2px] py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-100">View All <i class="fa-solid fa-arrow-right"></i></a>
    </div>
    <div className='w-full flex flex-wrap justify-center gap-2'>
        {
        products.map((item)=>(
            <ProductCard key={item.key} item={item}/>
        ))    
        }
    </div>
    </div>
    )
}