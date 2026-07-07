



import { products } from '../data/DayProducts.js'
import ProductCard from './ProductCard.jsx'

export default function FeaturedProducts(){
        
    return (
    <>
    <h2 className='font-medium ml-8 text-3xl text-camel my-8'>Featured Products</h2>
    <div className='px-2 w-full grid grid-cols-6 gap-2'>
        {
        products.map((item)=>(
            <ProductCard key={item.key} item={item}/>
        ))    
        }
    </div>
    </>
    )
}