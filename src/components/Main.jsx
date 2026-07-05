import FeaturedProducts from "./FeaturedProducts";
import Categories from "./Categories";
import SpecialOffers from "./SpecialOffers";



export default function Main(){
    return (
        <main className="w-full">
            <FeaturedProducts/>
            <Categories/>
            <SpecialOffers/>
        </main>
    )
}