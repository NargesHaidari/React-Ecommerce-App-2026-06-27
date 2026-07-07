



export default function ProductCard({item}){
        
    return (
        <div key={item.id} className='flex flex-col gap-2 items-center p-4 bg-warmCream rounded-lg'>
            <img className='h-[250px] object-cover object-center w-full rounded-lg' src={item.image} alt="product-image" />
            <h3>{item.title}</h3>
            <p><i className="text-yellow-400 fa-solid fa-star"></i>{item.rating}</p>
            <p>{item.price}$</p>
        </div>
    )
}