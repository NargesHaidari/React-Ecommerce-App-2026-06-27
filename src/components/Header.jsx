
import logo from '../assets/logo.png'

export default function Header(){
    return (
        <nav className='h-20 shadow-md flex justify-around'>
            <div className='h-full inline-flex items-center'><img src={logo} alt="Logo-Image" className='h-3/4' /></div>

            <ul className='inline-flex gap-6 items-center text-2xl text-golden1 font-semibold'>
                <li>All Categories</li>
                <li>Clothing</li>
                <li>Shoes</li>
                <li>Electronics</li>
            </ul>

            <div className='inline-flex gap-4 items-center'>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-sharp fa-solid fa-heart"></i>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </nav>
    )
}