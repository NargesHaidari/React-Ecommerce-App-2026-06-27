
import logo from '../assets/logo.png'

let headingThree = 'text-camel font-bold text-3xl mb-4'

export default function Footer(){
    return(
        <div className='flex gap-8 p-8 border-t-2 border-t-camel mt-40'>
           
        <div className="flex-[1]">
            <h3 className={headingThree}>Company</h3>

            <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/our-work">Our Work</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
        </div>

        <div className="flex-[1]">
            <h3 className={headingThree}>Shop</h3>

            <ul>
                <li><a href="/clothing">Clothing</a></li>
                <li><a href="/shoes">Shoes</a></li>
                <li><a href="/electronics">Electronics</a></li>
                <li><a href="/home-living">Home & Living</a></li>
            </ul>
        </div>

        <div className="flex-[1]">
            <h3 className={headingThree}>Support</h3>

            <ul>
                <li><a href="/shipping">Shipping</a></li>
                <li><a href="/returns">Returns</a></li>
                <li><a href="/track-order">Track Order</a></li>
                <li><a href="/help-center">Help Center</a></li>
            </ul>
        </div>

            <div className='flex-[2] flex flex-col gap-4'>
                <img src={logo} alt="Logo-image" className='w-[50%]' />
                <p>ShikShop is your trusted online destination for fashion, footwear, electronics, and home essentials. We carefully select high-quality products at competitive prices to provide a seamless, secure, and enjoyable shopping experience. Your satisfaction is at the heart of everything we do.</p>
                <div className='flex gap-4'>
                    <a href='' className="cursor-pointer transition-all hover:scale-115 active:scale-100 fa-brands fa-twitter"></a>
                    <a href='' className="cursor-pointer transition-all hover:scale-115 active:scale-100 fa-brands fa-linkedin-in"></a>
                    <a href='' className="cursor-pointer transition-all hover:scale-115 active:scale-100 fa-brands fa-instagram"></a>
                    <a href='' className="cursor-pointer transition-all hover:scale-115 active:scale-100 fa-brands fa-facebook-f"></a>
                </div>
            </div>
        </div>
        
    )
}