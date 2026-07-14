

import { Link } from 'react-router-dom'

import { featuredProducts1 } from '../data/featuredProducts1.js'
import ProductCard from './ProductCard.jsx'

export default function FeaturedProducts1(){
        
    return (
    <div>
    <div className='flex justify-between flex-wrap py-8 px-6 gap-4'>
        <h2 className='font-medium min-w-96 text-3xl text-camel inline-flex'>Featured Products</h2>
        <Link to="/featuredProducts2" className="ml-auto border-[2px] py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-100">View All <i class="fa-solid fa-arrow-right"></i></Link>
    </div>
    <div className='w-full flex flex-wrap justify-center gap-2'>
        {
        featuredProducts1.map((item)=>(
            <ProductCard key={item.key} item={item}/>
        ))    
        }
    </div>
    </div>
    )
}