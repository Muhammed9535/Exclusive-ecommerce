import { useContext } from 'react'
import './Account.css'
import { StoreContext } from '../../context/context'


function Account() {


    const { person } = useContext(StoreContext)
    return (
        <div className="account-container container-fluid">
            <div className="acount-header d-flex justify-content-between my-5">
                <p>Home / <b>My Account</b></p>
                <p><b> welcome <span className="col"> {person}!</span> </b></p>
            </div>
            <div className="account-content">
                <div className="left-col">
                    <p><b>Manage My Account</b></p>
                    <ul>
                        <li className='col'>My profile</li>
                        <li>Address Book</li>
                        <li>My Payment Options</li>
                    </ul>
                    <p><b>My Orders</b></p>
                    <ul>
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                        <li>My Payment Options</li>
                    </ul>
                    <p><b>My WishList </b> </p>
                </div>
                <div className="right-col">
                    <p className=' col' style={{ fontSize: "14px" }}>Edit Your Profile</p>
                    <form action="" className='account-profile-form'>
                        <div className="name d-flex">
                            <div className="first-name">
                                <label htmlFor="first name" className='input-header'>First Name</label>
                                <input type="text" name='firstName' placeholder='lawal' />
                            </div>

                            <div className="last-name">
                                <label htmlFor="last name" className='input-header'>Last Name</label>
                                <input type="text" name='lastName' placeholder='olarewaju' />
                            </div>
                        </div>

                        <div className="contact d-flex">
                            <div className="email">
                                <label htmlFor="email" className='input-header'>Email</label>
                                <input type="email" placeholder='rimel1111@gmail.com' />
                            </div>

                            <div className="address">
                                <label htmlFor="address" className='input-header'>Address</label>
                                <input type="text" placeholder='Kingston, 5236, United State' />
                            </div>
                        </div>

                        <label htmlFor="password" className='input-header'>Password Changes</label>
                        <input type="password" placeholder='current password' />


                        <input type="password" placeholder='New password' />


                        <input type="password" placeholder='Confirm New password' />

                        <button className='py-2 px-4 mb-5 save-changes'>Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account