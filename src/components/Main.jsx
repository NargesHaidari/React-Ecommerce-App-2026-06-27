import FeaturedProducts1 from "./FeaturedProducts1";
import Categories from "./Categories";
import SpecialOffers from "./SpecialOffers";
import TopSellers from "./TopSellers";



export default function Main(){
    return (
        <main className="w-full">
            <FeaturedProducts1/>
            <Categories/>
            {/* <div className="flex justify-between mb-20"> */}
                <TopSellers/>
                <SpecialOffers/>
            {/* </div> */}
        </main>
    )
}