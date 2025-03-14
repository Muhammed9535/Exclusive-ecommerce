import { assets } from '../../assets';
import './Hero.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Hero() {
    return (
        <>
            <div className="hero d-flex justify-content-between mt-5">
                <ul className='sidebar'>
                    <li className='mb-3'>Women's Fashion <ChevronRightIcon /></li>
                    <li className='mb-3'>Men's Fashion <ChevronRightIcon /> </li>
                    <li className='mb-3'>Electronics</li>
                    <li className='mb-3'>Home & Lifestyle</li>
                    <li className='mb-3'>Medicine</li>
                    <li className='mb-3'>Sports & Outdoor</li>
                    <li className='mb-3'>Baby's & Toys</li>
                    <li className='mb-3'>Groceries & Pets</li>
                    <li className='mb-3'>Health & Beauty</li>
                </ul>
                <img src={assets.banner} alt="" className='banner-img' />
            </div>
        </>
    )
}

export default Hero;