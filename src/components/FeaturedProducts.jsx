



import { dayProducts } from '../data/DayProducts.js'
import ProductCard from './ProductCard.jsx'

export default function FeaturedProducts(){
        
    return (
    <>
    <h2 className='font-medium ml-8 text-3xl text-camel my-8'>Featured Products</h2>
    <div className='px-8 w-full grid grid-cols-5 gap-8'>
        {
        dayProducts.map((item)=>(
            <ProductCard key={item.key} item={item}/>
        ))    
        }
    </div>
    </>
    )
}