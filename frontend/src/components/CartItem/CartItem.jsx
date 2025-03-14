import './CartItem.css'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useContext } from 'react';
import { StoreContext } from '../../context/context';



function CartItem({ product, quantity }) {

    const { removeItemFromCart, url } = useContext(StoreContext)

    return (
        <>
            <div className="img-name d-flex align-items-center">
                <div className="img-con me-3">
                    <img src={url + "/images/" + product.prodimg} alt="" style={{ width: "40px" }} />
                    <HighlightOffOutlinedIcon style={{ fontSize: "10px" }} className='cancel-icon' onClick={() => {
                        removeItemFromCart(product.id)
                    }} />
                </div>
                <p>{product.prodname}</p>
            </div>
            <p>{product.prodprice}</p>
            <p>{quantity}</p>
            <p>${product.prodprice * quantity}</p>
        </>
    )
}

export default CartItem