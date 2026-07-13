
import Banner from './Banner'
import Navigation from './Navigation'



export default function Header(){
    return (
        <header id='header' className='scroll-mt-20 relative'>
            <Navigation/>
            <Banner/>
        </header>
    )
}