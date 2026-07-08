



export default function ProductCard({item}){
        
    return (
        <div key={item.id} className='flex flex-col gap-2 min-w-56 items-center p-2 bg-warmCream rounded-lg'>
            <img className='h-[240px] object-cover object-center w-full rounded-lg' src={item.image} alt="product-image" />
            <h3>{item.title}</h3>
            <p><i className="text-yellow-400 fa-solid fa-star"></i>{item.rating}</p>
            <p>{item.price}$</p>
        </div>
    )
}
