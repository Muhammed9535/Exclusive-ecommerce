import './About.css'
import { assets } from "../../assets";
import Services from '../../components/Services/Services';


function About() {
    return (
        <div className="about-container container-fluid mt-5">
            <div className="about-routes">
                <p>Home <b>/ About</b></p>
            </div>

            <div className="about-content">

                <div className="about-story d-flex align-items-center container">
                    <div className="about-left-col">
                        <h2>Our Story</h2>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className="about-right-col">
                        <img src={assets.story} alt="" />
                    </div>
                </div>

                <div className="record my-5">
                    <div>
                        <img src={assets.servicesOne} alt="" />
                        <h2>10.5k</h2>
                        <p>Sellers active our site</p>
                    </div>
                    <div>
                        <img src={assets.servicestwo} alt="" />
                        <h2>33k</h2>
                        <p>Monthly Product Sale</p>
                    </div>
                    <div>
                        <img src={assets.servicesthree} alt="" />
                        <h2>45.5k</h2>
                        <p>Customers active in our site</p>
                    </div>
                    <div>
                        <img src={assets.servicesfour} alt="" />
                        <h2>25k</h2>
                        <p>Annual gross sale in our site</p>
                    </div>
                </div>



                <div className="founder-wrrapper d-flex align-items-center justify-content-center   ">

                    <div className="founder-con ">
                        <div className="founder">
                            <img src={assets.foundertwo} alt="" className='founder-img' />
                            <p className='founder-name my-0 fs-3'>Tom Cruise</p>
                            <p className='my-0'>Founder & Chairman</p>
                            <div className="founder-socials">
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-twitter ms-3"></i>
                                <i className="fa-brands fa-linkedin-in ms-3"></i>
                            </div>
                        </div>

                        <div className="founder">
                            <img src={assets.founderone} alt="" className='founder-img' />
                            <p className='founder-name my-0 fs-3'>Emma Watson</p>
                            <p className='my-0'>managing Director</p>
                            <div className="founder-socials">
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-twitter ms-3"></i>
                                <i className="fa-brands fa-linkedin-in ms-3"></i>
                            </div>
                        </div>

                        <div className="founder">
                            <img src={assets.founderthree} alt="" className='founder-img' />
                            <p className='founder-name my-0 fs-3'>Will Smith</p>
                            <p className='my-0'>Product Designer</p>
                            <div className="founder-socials">
                                <i className="fa-brands fa-instagram"></i>
                                <i className="fa-brands fa-twitter ms-3"></i>
                                <i className="fa-brands fa-linkedin-in ms-3"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <Services />

            </div>
        </div>
    )
}

export default About;