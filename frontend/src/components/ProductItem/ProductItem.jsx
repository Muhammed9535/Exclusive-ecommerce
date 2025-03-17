import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import './ProductItem.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/context';



function ProductItem({ product, display }) {


    const { addItemToCart, removeItemFromCart, addToWishList, cartItem, url } = useContext(StoreContext);







    return (
        <div className={display ? "product-item me-4" : ""}>
            <div className="img-con p-3 position-relative">
                <img src={product.prodimg} alt="" style={{ width: "190px", height: "180px" }} />
                <p className='position-absolute top-0 discount'>15%</p>
                <IconButton className='position-absolute top-0 end-0' onClick={() => {
                    addToWishList(product.id)
                }}>
                    <FavoriteBorderIcon style={{ width: "16px" }} />
                </IconButton>



                {cartItem[product.id] ?

                    <div className="add-remove-item" style={{ height: "20px" }}>

                        <IconButton onClick={() => {
                            removeItemFromCart(product.id)
                        }}>
                            <RemoveOutlinedIcon style={{ width: "20px" }} />
                        </IconButton>
                        <p style={{ display: "inline", fontSize: "15px" }}>{cartItem[product.id]}</p>
                        <IconButton onClick={() => {
                            addItemToCart(product.id)
                        }}>
                            <AddOutlinedIcon style={{ width: "20px" }} />
                        </IconButton>
                    </div> : <Button style={{ width: "100%", height: "20px", fontSize: "10px" }} variant="contained" className='bg-black' onClick={() => {
                        addItemToCart(product.id)
                    }}>Add to Cart</Button>}
            </div>
            <div className="product-details mt-3">
                <p style={{ color: "#000000", fontSize: "14px" }} className='m-0'>{product.prodname}</p>
                <p style={{ color: "#DB4444", fontSize: "14px" }} className='m-0'>${product.prodprice}</p>
            </div>


        </div>
    )
}

export default ProductItem;