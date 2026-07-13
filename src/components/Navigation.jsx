

import logo from '../assets/logo.png'
import MenuIcon from './MenuIcon'
import SearchIcon from './SearchIcon'
let navLink = "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 hover:after:w-full hover:cursor-pointer after:h-0.5 after:left-0 after:right-0 after:bg-camel after:transition-all after:duration-300 after:ease-in-out"

export default function Navigation(){
    return(
        <nav className='bg-white z-50 h-20 shadow-md flex justify-around fixed left-0 right-0 top-0'>
            <div className='h-full inline-flex items-center'><img src={logo} alt="Logo-Image" className='h-3/4' /></div>

            <ul className='hidden lg:flex gap-6 items-center text-2xl text-camel font-semibold'>
                <li><a href="#header" className={navLink}>Home</a></li>
                <li><a href="#categories" className={navLink}>Categories</a></li>
                <li><a href="#deals" className={navLink}>Deals</a></li>
                <li><a href="#shop" className={navLink}>Shop</a></li>
                <li><a href="#footer" className={navLink}>Footer</a></li>
            </ul>

            <div className='inline-flex gap-2 items-center md:gap-4'>
                <SearchIcon/>
                <i className="fa-sharp fa-solid fa-heart hover:text-camel cursor-pointer transition-all duration-200"></i>
                <i className="fa-solid fa-cart-shopping hover:text-camel cursor-pointer transition-all duration-200"></i>
                <MenuIcon/>
            </div>
        </nav>
    )
}