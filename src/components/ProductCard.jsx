



export default function ProductCard({item}){
        
    return (
        <div key={item.id} className='flex flex-col gap-2 items-center p-4 bg-warmCream rounded-2xl'>
            <img className='h-[300px] object-cover object-center w-full rounded-2xl' src={item.image} alt="product-image" />
            <h3>{item.title}</h3>
            <p><i className="text-yellow-400 fa-solid fa-star"></i>{item.rating}</p>
            <p>{item.price}$</p>
        </div>
    )
}