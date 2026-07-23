
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"

export default function LandingPage(){
    return (
        <div className="flex flex-col gap-20">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}