import './Nav.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/context';
import { NavLink, Link } from 'react-router-dom';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'



function Nav() {


    const [menu, setMenu] = useState(true)
    const { cartQuantity, url, showLogin, setShowLogin, sessionId, setwishListQuantity, setCartQuantity, setSessionId, setPerson } = useContext(StoreContext)
    const navigate = useNavigate();


    const logOut = async () => {
        const response = await axios.get(url + "/api/user/logout", { withCredentials: true })
        if (response.data.success) {
            setShowLogin(true)
            // setCartItem({})
            // setWishList({})
            setCartQuantity(0)
            setwishListQuantity(0)
            navigate("/")
            localStorage.removeItem("log in token")
            setSessionId("");
            setPerson("stranger")
            toast(response.data.message)
        }
    }

    const changeMenuIcon = () => {
        setMenu((prev) => !prev)
    }

    return (
        <>


            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex">
                    <h1 className='logo'>Exclusive</h1>
                    <ul className={menu ? "mb-2 mb-lg-0 d-flex nav-list " : "mb-2 mb-lg-0 d-flex nav-list show-menu"}>
                        <NavLink to="/" onClick={() => {
                        }} className={({ isActive }) => (isActive) ? "line nav" : "nav"}>
                            Home
                        </NavLink>
                        <NavLink to="/contact" onClick={() => {
                        }} className={({ isActive }) => (isActive) ? "line nav" : " nav"}>
                            Contact
                        </NavLink>
                        <NavLink to="/about" onClick={() => {
                        }} className={({ isActive }) => (isActive) ? "line nav" : "nav"}>
                            About
                        </NavLink>

                        {showLogin && <NavLink to="/signup" onClick={() => {
                        }} className={({ isActive }) => (isActive) ? "line nav" : "nav"}>
                            Sign Up
                        </NavLink>}
                    </ul>
                    <div className="nav-right d-flex align-items-center">
                        <form className="d-flex bg-body-secondary p-1 rounded top-search" role="search">
                            <input className="search-input p-2" type="text" placeholder="what are you looking for?" aria-label="Search" />
                            <button className="btn" type="submit"><SearchOutlinedIcon sx={{ width: '20px' }} /></button>
                        </form>
                        <Link to="/wishlist" className='shopping-cart'>
                            < FavoriteBorderIcon style={{ marginLeft: '20px' }} className='wishlist' />
                        </Link>
                        <div className="cart-ppt">
                            <Link to="/cart">
                                <ShoppingCartCheckoutIcon style={{ marginLeft: '20px' }} className='shopping-cart' />
                            </Link>
                            <p className='cart-quantity'>{cartQuantity}</p>
                        </div>
                        <div className="person">
                            <PermIdentityIcon style={{ marginLeft: '20px' }} className='person-icon' />
                            <div className="account">
                                <div className="manage-account">
                                    <PermIdentityIcon fontSize='small' />
                                    <Link to={sessionId ? "/account" : "/"}>
                                        <p>Manage My Account</p>
                                    </Link>
                                </div>
                                <div className="order">
                                    <LocalMallOutlinedIcon fontSize='small' />
                                    <Link to={sessionId ? "/myorders" : "/"}>
                                        <p>My Order</p>
                                    </Link>
                                </div>
                                <div className="cancel-order">
                                    <CancelOutlinedIcon fontSize='small' />
                                    <Link to={sessionId ? "/cancel-order" : "/"}>
                                        <p>My cancellations</p>
                                    </Link>
                                </div>
                                <div className="reviews">
                                    <StarBorderOutlinedIcon fontSize='small' />
                                    <p>My reviews</p>
                                </div>
                                {sessionId && <div className="logout" onClick={() => {
                                    logOut()
                                }}>
                                    <LogoutOutlinedIcon fontSize='small' />
                                    <p>Log Out</p>
                                </div>}
                            </div>
                        </div>
                        {menu ?
                            <div className="menu">
                                <MenuIcon onClick={changeMenuIcon} />
                            </div> : <div className="menu">
                                <CloseIcon onClick={changeMenuIcon} />
                            </div>
                        }
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Nav;