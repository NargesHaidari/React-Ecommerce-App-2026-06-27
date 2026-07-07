

import { topSellers } from "../data/topSellers";


export default function TopSellers(){
    return (
        <div className="h-[500px] relative w-[48vw] rounded-lg flex flex-col gap-4 bg-warmCream p-4">
            <h3 className="font-bold text-4xl text-camel">Top Sellers</h3>
            <a href="" className="absolute right-8 top-4 border-[2px] py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 active:scale-100">View All <i class="fa-solid fa-arrow-right"></i></a>
            <div className="w-full inline-grid grid-cols-4 gap-2">
            {
                topSellers.map((item)=>(
                    <div className="h-[200px] w-[170px]  overflow-hidden rounded-lg  ">
                        <img key={item.key} className="hover:scale-110 duration-200 transition-all h-full w-full object-center object-cover" src={item.image} alt="product-image" />
                    </div>
                ))
            }
            </div>
        </div>
    )
}