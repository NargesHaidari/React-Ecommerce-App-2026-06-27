
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from './components/LandingPage.jsx'
// import './data/products.js'
// import FeaturedProducts2 from "./components/FeaturedProducts2.jsx";
// import Clothing from "./components/Clothing";
// import Shoes from "./components/Shoes";
// import Electronic from "./components/Electronic";
// import HomeLiving from "./components/HomeLiving.jsx";
// import TopSellers2 from "./components/TopSellers2.jsx";

import Cart from "./components/Cart.jsx";

export default function App(){
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<LandingPage />} />
        //         <Route path="/featuredProducts2" element={<FeaturedProducts2/>} />
        //         <Route path="/clothing" element={<Clothing />}/>
        //         <Route path="/shoes" element={<Shoes />}/>
        //         <Route path="/electronics" element={<Electronic />}/>
        //         <Route path="/home&living" element={ <HomeLiving />}/>
        //         <Route path="/topSellers2" element={<TopSellers2/>} />
        //     </Routes>
        // </Router>
        
        <Cart />
    )
}