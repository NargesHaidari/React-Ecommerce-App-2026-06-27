

export default function SearchIcon({onClick , open}){

    return(
    <>
        <div className={`relative translate-x-0 transition-all duration-300 ${open ? "w-50" : "w-0"}`}>
            <input type="text" className={`outline-none ${open ? 'inline-flex' : 'hidden'}`} />
            <div className="after:content-[''] after:w-full after:h-0.5 after:absolute after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 after:ease-in-out"></div>
        </div>

        <i onClick={onClick} className={`fa-solid fa-magnifying-glass hover:text-camel cursor-pointer transition-all duration-200`}></i>
    </>
    )
}