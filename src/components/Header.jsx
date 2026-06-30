
import logo from '../assets/logo.png'
import Banner from './Banner'

let navLink = "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 hover:after:w-full hover:cursor-pointer after:h-0.5 after:left-0 after:right-0 after:bg-camel after:transition-all after:duration-300 after:ease-in-out"

export default function Header(){
    return (
        <header>
            <nav className='bg-white h-20 shadow-md flex justify-around fixed left-0 right-0 top-0'>
                <div className='h-full inline-flex items-center'><img src={logo} alt="Logo-Image" className='h-3/4' /></div>

                <ul className='hidden lg:flex gap-6 items-center text-2xl text-camel font-semibold'>
                    <li><a href="#" className={navLink}>All Categories</a></li>
                    <li><a href="#" className={navLink}>Clothing</a></li>
                    <li><a href="#" className={navLink}>Shoes</a></li>
                    <li><a href="#" className={navLink}>Electronics</a></li>
                </ul>

                <div className='inline-flex gap-2 items-center md:gap-4'>
                    <i className="fa-solid fa-magnifying-glass hover:text-camel cursor-pointer"></i>
                    <i className="fa-sharp fa-solid fa-heart hover:text-camel cursor-pointer"></i>
                    <i className="fa-solid fa-cart-shopping hover:text-camel cursor-pointer"></i>
                    <i className="fa-solid fa-bars hover:text-camel cursor-pointer"></i>
                </div>
            </nav>

            <Banner/>
        </header>
    )
}