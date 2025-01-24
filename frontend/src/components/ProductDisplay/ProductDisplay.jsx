import { products } from "../../assets/index.js";
import ProductItem from "../ProductItem/ProductItem.jsx";
import { Button } from "@mui/material";
import SectionHeader from "../SectionHeader/SectionHeader.jsx";

import './ProductDisplay.css'
import { useState } from "react";

function ProductDisplay() {

    const [display, SetDisplay] = useState(true)

    const handleDisplayView = () => {
        SetDisplay(prev => !prev);
    }

    return (
        <div className="section-content" style={{ textAlign: "center" }}>
            <SectionHeader text="Today's" category="Flash Sales" />
            <div className={display ? "content d-flex overflow-auto mt-3" : "showgrid"}>
                {products.map((product, index) => {
                    return (
                        <ProductItem key={index} product={product} display={display} />
                    )
                })}
            </div>

            < Button style={{ color: "white", borderRadius: "5px", background: "#DB4444", display: "inline", fontSize: "12px" }} className='px-4 py-2 mt-4' onClick={() => {
                handleDisplayView();
            }}>{display ? "View All Products" : "hide All product"}</Button>
        </div>
    )
}

export default ProductDisplay;