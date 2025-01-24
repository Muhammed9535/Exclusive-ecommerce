import './Nav.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useState } from 'react';

function Nav() {

    const [line, setLine] = useState("home")

    return (
        <>


            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex">
                    <h1>Exclusive</h1>
                    <ul className="mb-2 mb-lg-0 d-flex">
                        <li onClick={() => {
                            setLine("home")
                        }} className={line == "home" ? "active" : ""}>
                            Home
                        </li>
                        <li onClick={() => {
                            setLine("contact")
                        }} className={line == "contact" ? "active ms-5" : "ms-5"}>
                            Contact
                        </li>
                        <li onClick={() => {
                            setLine("about")
                        }} className={line == "about" ? "active ms-5" : "ms-5"}>
                            About
                        </li>
                        <li onClick={() => {
                            setLine("sign")
                        }} className={line == "sign" ? "active ms-5" : "ms-5"}>
                            Sign Up
                        </li>
                    </ul>
                    <div className="nav-right d-flex align-items-center">
                        <form className="d-flex bg-body-secondary p-1 rounded" role="search">
                            <input className="search-input p-2" type="text" placeholder="what are you looking for?" aria-label="Search" />
                            <button className="btn" type="submit"><SearchOutlinedIcon sx={{ width: '20px' }} /></button>
                        </form>
                        < FavoriteBorderIcon style={{ marginLeft: '16px' }} />
                        <ShoppingCartCheckoutIcon style={{ marginLeft: '16px' }} />
                        <PermIdentityIcon style={{ marginLeft: '16px' }} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;