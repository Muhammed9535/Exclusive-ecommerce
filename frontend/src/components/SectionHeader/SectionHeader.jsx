import './SectionHeader.css'
import ArrowBtn from '../ArrowButton/ArrowButton';


function SectionHeader(props) {
    return (
        <div className="flash-sales mt-5">
            <div className="rec d-flex">
                <div></div>
                <p className=" ms-3">{props.text}</p>
            </div>
            <div className="sec-header d-flex justify-content-between">
                <h2>{props.category}</h2>
                <div className="arrow">
                    <ArrowBtn />
                </div>
            </div>
        </div>
    )
}

export default SectionHeader;