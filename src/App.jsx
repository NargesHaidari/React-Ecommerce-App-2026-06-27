
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx'
import './data/products.js'
import FeaturedProducts2 from "./components/FeaturedProducts2.jsx";

import Clothing from "./components/Clothing";

export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/featuredProducts2" element={<FeaturedProducts2/>} />
                <Route path="/clothing" element={<Clothing />}/>
            </Routes>
        </Router>
        
    )
}