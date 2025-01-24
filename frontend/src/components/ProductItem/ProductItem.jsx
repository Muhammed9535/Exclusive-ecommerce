import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import './ProductItem.css'
import { useState } from 'react';



function ProductItem({ product, display }) {

    const [itemCount, setItemCount] = useState(0);


    const handleAddCount = () => {
        setItemCount(itemCount + 1);
    }

    const handleRemoveCount = () => {
        setItemCount(itemCount - 1);
    }


    return (
        <div className={display ? "product-item me-4" : ""}>
            <div className="img-con p-3 position-relative">
                <img src={product.img} alt="" style={{ width: "190px", height: "180px" }} />
                <p className='position-absolute top-0 discount'>15%</p>
                <IconButton className='position-absolute top-0 end-0'>
                    <FavoriteBorderIcon style={{ width: "16px" }} />
                </IconButton>
                <IconButton className='position-absolute end-0 mt-2' >
                    <VisibilityOutlinedIcon style={{ width: "16px" }} />
                </IconButton>


                {itemCount ?

                    <div className="add-remove-item" style={{ height: "20px" }}>

                        <IconButton onClick={() => {
                            handleRemoveCount()
                        }}>
                            <RemoveOutlinedIcon style={{ width: "20px" }} />
                        </IconButton>
                        <p style={{ display: "inline", fontSize: "15px" }}>{itemCount}</p>
                        <IconButton onClick={() => {
                            handleAddCount();
                        }}>
                            <AddOutlinedIcon style={{ width: "20px" }} />
                        </IconButton>
                    </div> : <Button style={{ width: "100%", height: "20px", fontSize: "10px" }} variant="contained" className='bg-black' onClick={() => {
                        handleAddCount()
                    }}>Add to Cart</Button>}
            </div>
            <div className="product-details mt-3">
                <p style={{ color: "#000000", fontSize: "14px" }} className='m-0'>{product.product_name}</p>
                <p style={{ color: "#DB4444", fontSize: "14px" }} className='m-0'>${product.price}</p>
                <p>{product.rating}</p>
            </div>


        </div>
    )
}

export default ProductItem;