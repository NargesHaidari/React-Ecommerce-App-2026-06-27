
import specialOffer from '../assets/specialOffer2.png'

let timeStyle = 'bg-white w-[60px] h-[60px] flex flex-col items-center justify-center rounded-md text-2xl font-semibold text-camel'
let featureStyle = 'flex min-w-36 gap-2 text-[11px] items-center'

export default function SpecialOffers(){
    return (
        <div className="w-full items-start flex-col flex gap-3  py-5 px-4 rounded-lg bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${specialOffer})`}}>
            
            <div className='flex flex-col gap-3 items-start justify-between'>
                    
                <h3 className='text-camel font-semibold tracking-widest'>SPECIAL OFFER</h3>
                <p className='text-black text-6xl font-bold' style={{ fontFamily: "Bebas Neue" }}>30% OFF</p>

                {/* limited time */}
                <p>Limited time offer on selected items.<br/>Don't miss out!</p>
                <div className='flex flex-wrap gap-3 items-center'>
                    <span className={timeStyle}>02 <br/> <span className='text-[12px] text-black'>Days</span> </span>:
                    <span className={timeStyle}>14 <br/> <span className='text-[12px] text-black'>Hours</span> </span>:
                    <span className={timeStyle}>37 <br/> <span className='text-[12px] text-black'>Minutes</span> </span>:
                    <span className={timeStyle}>19 <br/> <span className='text-[12px] text-black'>Seconds</span> </span>
                </div>

                {/* shop now button */}
                <a href='' className='text-white bg-camel py-2 px-7 inline-block rounded-md transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95'>Shop Now <i class="fa-solid fa-arrow-right"></i></a>

            </div>

            {/* features */}
            <div className='flex flex-wrap gap-4 mt-5 bg-white/80 rounded-md py-2 px-4'>
                <span className={featureStyle}>
                    <span>
                        <i className="text-2xl fa-solid fa-truck"></i>
                    </span>
                    <span>
                        <p>FREE SHIPPING</p>
                        <p>On all orders over 50$</p>
                    </span>
                </span>

                <span className={featureStyle}>
                    <span>
                        <i className="text-2xl fa-solid fa-rotate-left"></i>
                    </span>
                    <span>
                        <p>EASY RETURNS</p>
                        <p>30 days return policy</p>
                    </span>
                </span>

                <span className={featureStyle}>
                    <span>
                        <i className="text-2xl fa-solid fa-shield"></i>
                    </span>
                    <span>
                        <p>SECURE PAYMENT</p>
                        <p>100% secure checkout</p>
                    </span>
                </span>

                <span className={featureStyle}>
                    <span>
                        <i className="text-2xl fa-solid fa-headset"></i>
                    </span>
                    <span>
                        <p>24/7 SUPPORT</p>
                        <p>Dedicated support</p>
                    </span>
                </span>
            </div>
        </div>
    )
}