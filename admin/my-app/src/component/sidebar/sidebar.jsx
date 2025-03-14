import { NavLink } from 'react-router-dom'
import './sidebar.css'


function SideBar({ menu }) {
    return (
        <div className={menu ? "sidebar px-5" : "sidebar show-menu px-5"}>

            <NavLink to='/add'>
                <div className="sidebar-option px-3 py-2 mb-2 text-center">
                    <p>Add Item</p>
                </div>
            </NavLink>




            <NavLink to='/product'>
                <div className="sidebar-option px-3 py-2 mb-2 text-center">
                    <p>Available Product</p>
                </div>
            </NavLink>


            <NavLink to='/order'>
                <div className="sidebar-option px-3 py-2 mb-2  text-center">
                    <p>Orders</p>
                </div>
            </NavLink>

            <NavLink to='/feedback'>
                <div className="sidebar-option px-3 py-2 mb-2  text-center">
                    <p>FeedBack</p>
                </div>
            </NavLink>
        </div>
    )
}

export default SideBar;