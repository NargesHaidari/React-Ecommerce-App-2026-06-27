import FeaturedProducts from "./FeaturedProducts";
import Categories from "./Categories";
import SpecialOffers from "./SpecialOffers";
import TopSellers from "./TopSellers";



export default function Main(){
    return (
        <main className="w-full">
            <FeaturedProducts/>
            <Categories/>
            {/* <div className="flex justify-between mb-20"> */}
                <TopSellers/>
                <SpecialOffers/>
            {/* </div> */}
        </main>
    )
}