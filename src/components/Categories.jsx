
import { categoriesProducts } from '../data/categoriesProducts.js'

export default function FeaturedProducts(){
        
    return (
    <div className='mb-20 mt-40 flex flex-col gap-6 items-center'>
    <h2 className='text-camel font-semibold text-4xl flex flex-col items-center'><div className='text-gray-500 text-lg'>SHOP BY</div>Categories</h2>
    <p className='text-gray-500 text-lg'>Browse our top categories and find your perfect style</p>
    <div className='px-48 w-full grid grid-cols-4 gap-2'>
        {
        categoriesProducts.map((item)=>(
            <div className='rounded-2xl h-[400px] bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${item.image})`}} key={item.key}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                    <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
                </div>
                <p className='text-white text-2xl'>{item.category}</p>
                <a href="" className='text-camel'>Shop now <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        ))    
        }
    </div>
    </div>
    )
}