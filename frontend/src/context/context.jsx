import { useState, createContext, useEffect, useRef } from "react";
import axios from "axios";



export const StoreContext = createContext(null);

function StoreContextProvider(props) {

    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState({})
    const [wishList, setWishList] = useState({})
    const [cartQuantity, setCartQuantity] = useState(0)
    const [wishListQuantity, setwishListQuantity] = useState(0)
    const [showLogin, setShowLogin] = useState(true)
    const [sessionId, setSessionId] = useState("")
    const [cancelOrder, setCancelOrder] = useState([])
    const [userOrder, setUserOrder] = useState([])
    const [person, setPerson] = useState("stranger")


    const url = "http://localhost:3000";




    const addItemToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem(prev => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        setCartQuantity(prev => prev + 1)

        if (sessionId) {
            const response = await axios.post(url + "/api/cart/add", { itemId }, { withCredentials: true })
            console.log(itemId)
            if (response.data.success) {
                console.log("doneee")
            } else {
                console.log(response.data.message)
            }

        }

    }


    const removeItemFromCart = async (itemId) => {
        setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        setCartQuantity(prev => prev - 1)

        if (sessionId) {
            await axios.post(url + "/api/cart/remove", { itemId }, { withCredentials: true })

        }
    }


    const addToWishList = async (itemId) => {
        if (!wishList[itemId]) {
            setWishList(prev => ({ ...prev, [itemId]: 1 }))
            setwishListQuantity(prev => prev + 1)
        } else {
            alert("item already added to wishList");
        }
        if (sessionId) {
            console.log(itemId)
            await axios.post(url + "/api/wishlist/add", { itemId }, { withCredentials: true })

        }
    }

    const removeFromWishList = async (itemId) => {
        setWishList(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        setwishListQuantity(prev => prev - 1)
        if (sessionId) {
            console.log(itemId)
            await axios.post(url + "/api/wishlist/remove", { itemId }, { withCredentials: true })

        }
    }


    const getToTalCartItemAmount = () => {
        let totalAmount = 0
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                const itemInfo = products.find((product) => product.id == item);
                totalAmount += itemInfo.prodprice * cartItem[item]
            }
        }
        return totalAmount
    }

    const loadCartData = async () => {
        const response = await axios.get(url + "/api/cart/getcart", { withCredentials: true })

        if (response.data.success) {
            console.log(url + "/api/cart/getcart");
            setCartItem(response.data.userCart)
            setCartQuantity(response.data.cartQuan)
        } else {
            console.log(response.data.message)
        }
    }

    const loadWishList = async () => {
        const response = await axios.get(url + "/api/wishlist/getwistlist", { withCredentials: true });
        if (response.data.success) {
            setWishList(response.data.userWishlist)
            setwishListQuantity(response.data.wishlistQuantity)
        }
    }






    const getAllCancelOrder = async () => {
        const response = await axios.get(url + "/api/order/get-cancel-order", { withCredentials: true })

        if (response.data.success) {
            setCancelOrder(response.data.message)
        }
    }


    const allProduct = async () => {
        const response = await axios.get(url + "/api/product/get-all-product", { withCredentials: true })
        if (response.data.success) {
            setProducts(response.data.productlist)
        } else {
            alert("can not set product")
        }
    }



    useEffect(() => {
        async function fetchData() {
            await allProduct();
            if (localStorage.getItem("log in token")) {
                setSessionId(localStorage.getItem("log in token"))
                setShowLogin(false);
                await loadCartData();
                await loadWishList()
            };
        } fetchData()
    }, [])


    const contextvalue = {
        cartItem,
        setCartItem,
        addItemToCart,
        removeItemFromCart,
        wishList,
        addToWishList,
        removeFromWishList,
        cartQuantity,
        setCartQuantity,
        wishListQuantity,
        getToTalCartItemAmount,
        url,
        showLogin,
        setShowLogin,
        sessionId,
        setSessionId,
        products,
        loadCartData,
        loadWishList,
        setwishListQuantity,
        cancelOrder,
        getAllCancelOrder,
        setWishList,
        userOrder,
        setUserOrder,
        person, setPerson
    }



    return (
        <>
            <StoreContext.Provider value={contextvalue}>
                {props.children}
            </StoreContext.Provider>
        </>
    )
}

export default StoreContextProvider;