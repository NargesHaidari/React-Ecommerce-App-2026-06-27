
import banner from '../assets/banner.png'

let bannerStyle = "w-full h-[500px] mt-20 bg-cover bg-center bg-no-repeat flex items-center"
let divStyle = "inline-flex items-start gap-8 flex-col justify-center bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8"

export default function Banner(){
    return (
        <section className={bannerStyle} style={{backgroundImage: `url(${banner})`}}>

            <div className={divStyle}>

                <p className="text-camel text-xl uppercase tracking-widest">NEW COLLECTION</p>

                <h1 className="text-4xl font-bold md:text-5xl">Style for Everyone,<br />Everything for You</h1>

                <p className='text-xl'>Fashion for Women & Men | Shoes | Home Essentials...</p>

                <button className='text-white bg-camel py-2 px-4 rounded text-1xl duration-300 transition-all hover:scale-105 hover:cursor-pointer active:scale-100 md:text-2xl'>Shop Now</button>
            
            </div>

        </section>
    )
}