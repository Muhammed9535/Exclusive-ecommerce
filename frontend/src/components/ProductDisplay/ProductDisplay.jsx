import ProductItem from "../ProductItem/ProductItem.jsx";
import { Button } from "@mui/material";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

import './ProductDisplay.css'
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/context.jsx";

function ProductDisplay(props) {

    const [display, SetDisplay] = useState(true)
    const { products } = useContext(StoreContext)

    const handleDisplayView = () => {
        SetDisplay(prev => !prev);
    }



    return (
        <div className="section-content mb-5" style={{ textAlign: "center" }}>
            <SectionHeader text={props.text} category={props.category} />
            <div className={display ? "con d-flex overflow-auto mt-5" : "content"} >
                {(products || []).map((product, index) => {

                    if (product.prodcategory == props.category)
                        return (

                            <ProductItem key={index} product={product} display={display} category={props.category} />
                        )
                })}
            </div>

            < Button style={{ color: "white", borderRadius: "5px", background: "#DB4444", display: "inline", fontSize: "12px" }} className='px-4 py-2 mt-4 show-all-btn' onClick={() => {
                handleDisplayView();
            }}>{display ? "View All Products" : "hide All product"}</Button>
        </div>
    )
}

export default ProductDisplay;