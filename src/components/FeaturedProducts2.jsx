import { Link } from 'react-router-dom'
import { featuredProducts2 } from '../data/featuredProducts2.js'

export default function FeaturedProducts2(){
    return(
        <div>
            <div className='flex justify-center flex-wrap py-8 px-6 gap-4'>
                    <h2 className='font-medium  text-3xl text-camel inline-flex'>Featured Products</h2>
                    <Link to="/" className="ml-auto border-[2px] py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-100">Back <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className='w-full flex flex-wrap justify-center gap-2'>
                    {
                    featuredProducts2.map((item)=>(
                        <div key={item.id} className='flex flex-col gap-2 min-w-56 items-center p-2 bg-warmCream rounded-lg'>
                            <div className="overflow-hidden rounded-lg w-full"><img className='transition-all duration-200 h-[240px] object-cover object-center w-full rounded-lg hover:scale-105' src={item.image} alt="product-image" /></div>
                            <h3>{item.title}</h3>
                            <p><i className="text-yellow-400 fa-solid fa-star"></i>{item.rating}</p>
                            <p>{item.price}$</p>
                            <Link to=" " className="border-[2px] py-1 px-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-100">Add to cart</Link>
                        </div>
                    ))    
                    }
            </div>
        </div>
    )
}