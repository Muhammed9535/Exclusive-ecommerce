import './SectionHeader.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WestIcon from '@mui/icons-material/West';
import { useContext } from 'react';
import { StoreContext } from '../../context/context';

function SectionHeader(props) {


    return (
        <div className="flash-sales mt-5">
            <div className="rec d-flex">
                <div></div>
                <p className=" ms-3" >{props.text}</p>
            </div>
            <div className="sec-header d-flex justify-content-between">
                <h2>{props.category}</h2>
                <div className="arrow">
                    <WestIcon className='arrow-btn' />
                    <ArrowForwardIcon className='arrow-btn' />
                </div>
            </div>
        </div>
    )
}

export default SectionHeader;