import { useState } from "react"

let navLink = "relative after:content-[''] after:absolute after:-bottom-1 after:w-0 hover:after:w-full hover:cursor-pointer after:h-0.5 after:left-0 after:right-0 after:bg-camel after:transition-all after:duration-300 after:ease-in-out active:opacity-50 transition-all duration-200"

export default function MenuIcon(){
    let [open, setOpen] = useState(false)
    return(
        <>
            <i onClick={()=>{setOpen(true)}} className="fa-solid fa-bars lg:!hidden hover:text-camel active:opacity-50 transition-all duration-200 cursor-pointer"></i>
            
            <div className={`absolute rounded transition-all duration-300 top-20 right-0 py-10 bg-white w-40 border-t-2 border-camel ${open ? "translate-x-0" : "translate-x-full"}`}>
                <i onClick={()=>{setOpen(false)}} className="fa-solid fa-xmark absolute top-2 left-2 hover:text-camel active:opacity-55"></i>
                <ul className=' flex flex-col gap-6 items-center text-2xl text-camel font-semibold'>
                    <li><a href="#" className={navLink}>Home</a></li>
                    <li><a href="#" className={navLink}>Categories</a></li>
                    <li><a href="#" className={navLink}>Deals</a></li>
                    <li><a href="#" className={navLink}>Shop</a></li>
                    <li><a href="#" className={navLink}>contact</a></li>
                </ul>
            </div>
        </>
    )
}


