import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './nav.css'


function Nav({ menu, changeMenuIcon }) {




    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex">
                    <h1>Exclusive</h1>
                    {menu ?
                        <div className="menu">
                            <MenuIcon onClick={changeMenuIcon} />
                        </div> : <div className="menu">
                            <CloseIcon onClick={changeMenuIcon} />
                        </div>
                    }
                </div>
            </nav></>
    )
}

export default Nav;