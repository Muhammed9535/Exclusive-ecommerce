import { assets } from '../../assets';
import './Footer.css'


function Footer() {
    return (
        <div className="footer bg-black mt-5">
            <div className="container-fluid footer-container d-flex justify-content-between py-5">
                <div className="footer-col-1">
                    <h4 className='mb-3 foot-header'>Exclusive</h4>
                    <h5>Subscribe</h5>
                    <p>Get 10% off all your first order</p>
                    <input type="text" placeholder="Enter Email" name="" id="" className='input-field' />
                </div>
                <div className="footer-col-2">
                    <h4 className='mb-3 foot-header'>Support</h4>
                    <p>111 Bijoy sarani, Dhaka,  <br />
                        DH 1515, Bangladesh.
                    </p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="footer-col-3">
                    <h4 className='mb-3 foot-header'>Account</h4>
                    <p>
                        My Account
                    </p>
                    <p>
                        Login / Register
                    </p>
                    <p>
                        Cart
                    </p>
                    <p>
                        Cart
                    </p>
                    <p>
                        Shop
                    </p>
                </div>
                <div className="footer-col-4">
                    <h4 className='mb-3 foot-header'>Link</h4>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="footer-col-5">
                    <h4 className='mb-3 foot-header'>Download App</h4>
                    <p>Save $3 with App New User Only</p>
                    <img src={assets.Qcode} alt="" />
                    <div className='download'>
                        <img src={assets.googleplay} alt="" />
                        <img src={assets.apple} alt="" />
                    </div>
                    <div className="socials">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;