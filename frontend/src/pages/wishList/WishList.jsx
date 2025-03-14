import { useContext, useEffect } from "react";
import WishListitem from "../../components/WishListItem/WishListitem.jsx";

import './WishList.css'
import { StoreContext } from "../../context/context.jsx";
import axios from "axios";
import { toast } from 'react-toastify'

function WishList() {

    const { wishList, wishListQuantity, products, url, setWishList, loadCartData, loadWishList } = useContext(StoreContext);


    const moveToBag = async () => {
        console.log("clicked")
        if (Object.keys(wishList).length > 0) {
            const response = await axios.get(url + "/api/wishlist/move-to-bag", { withCredentials: true })
            if (response.data.success) {
                setWishList(response.data.message)
                await loadCartData()
                await loadWishList()
            } else {
                toast(response.data.message)
            }
        } else {
            toast("wishlist is empty")
        }

    }

    useEffect(() => {

    }, [wishList])
    return (
        <div className="container">


            <div className="section-content mb-5" >
                <div className="wishlist-header d-flex justify-content-between mt-5">
                    <p>wishlist({wishListQuantity})</p>

                    <button className="all-to-bag" onClick={() => {
                        moveToBag()
                    }}>Move all to bag</button>
                </div>
                <div className="content showgrid overflow-auto mt-5">
                    {products.map((product, index) => {
                        if (wishList[product.id] > 0)
                            return (
                                <WishListitem key={index} product={product} />
                            )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WishList;