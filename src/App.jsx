
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx'
import './data/products.js'

export default function App(){
    return (
        <Router>
            <LandingPage />
            <Routes>
                <Route/>
            </Routes>
        </Router>
    )
}