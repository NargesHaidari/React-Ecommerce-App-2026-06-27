
import clothing from '../data/clothing.js'
import ProductCard from './ProductCard'

export default function Clothing(){
    return(
        <div className='py-6 px-6 flex flex-col gap-4 items-center'>
            <h3 className='text-camel font-semibold text-4xl'>Clothing</h3>
            <div className='flex gap-2 flex-wrap justify-center'>
                {
                clothing.map((item)=>(
                    <ProductCard item={item} key={item.id} />
                ))
                }
            </div>
        </div>
    )
}