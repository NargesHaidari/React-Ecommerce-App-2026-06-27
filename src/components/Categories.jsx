
import { Link } from 'react-router-dom'
import { categoriesProducts } from '../data/categoriesProducts.js'

export default function FeaturedProducts(){
        
    return (
    <div id='categories' className='scroll-mt-20 my-20 flex flex-col gap-6 items-center px-4'>
    <h2 className='text-camel font-semibold text-4xl flex flex-col items-center'><div className='text-gray-500 text-lg'>SHOP BY</div>Categories</h2>
    <p className='text-gray-500 text-lg text-center'>Browse our top categories and find your perfect style</p>
    <div className='w-full flex justify-center gap-2 flex-wrap'>
        {
        categoriesProducts.map((item)=>(
            <div className='flex flex-col items-center justify-end p-3 rounded-2xl min-w-64 h-[400px] bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${item.image})`}} key={item.key}>
                <div className='flex flex-col items-center bg-black/30 w-full rounded-2xl py-2'>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                        <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
                    </div>
                    <Link to={item.path} className='text-white text-2xl hover:scale-105 transition-all duration-200 active:scale-100'>{item.category}</Link>
                    <a href="" className='text-camel hover:text-white transition-all duration-200 active:scale-95'>Shop now <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        ))    
        }
    </div>
    </div>
    )
}