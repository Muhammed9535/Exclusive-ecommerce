import { useContext, useEffect, useState } from 'react'
import './Contact.css'
import axios from 'axios';
import { StoreContext } from '../../context/context';

function Contact() {

    const { url } = useContext(StoreContext)

    const [contact, setContact] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    })


    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        setContact(prev => ({ ...prev, [name]: value }))
    }

    const submitContactForm = async (e) => {
        e.preventDefault()


        const details = {
            name: contact.name,
            email: contact.email,
            number: contact.number,
            message: contact.message
        }

        const response = await axios.post(url + "/api/contact/add-contact", details, { withCredentials: true })
        if (response.data.success) {
            alert(response.data.message)
            setContact({
                name: "",
                email: "",
                number: "",
                message: ""
            })
        }

    }


    useEffect(() => {
        console.log(contact)
    }, [contact])
    return (
        <div className="contact-container container-fluid">
            <div className="contact-route">
                <p className='my-5'>Home / <b> Contact</b></p>
                <div className="contact-content d-flex justify-content-between mb-5">
                    <div className="contact-left-col p-4">
                        <div className="call d-flex align-items-center mb-2">
                            <i className="fa-solid fa-phone phone-img"></i>
                            <p className='mb-0 ms-3 fs-6'>Call To Us</p>
                        </div>
                        <p>we are available 24/7</p>
                        <p className='mb-3'>Phone: +8801811122</p>
                        <hr />
                        <div className="message d-flex align-items-center mb-2">
                            <i className="fa-regular fa-envelope phone-img"></i>
                            <p className='mb-0 ms-3 fs-6'>Write To Us</p>
                        </div>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>

                    <div className="contact-right-col py-4 px-2">
                        <form className='text-end' onSubmit={submitContactForm}>

                            <div className="contant-input">
                                <input type="text" placeholder='Your Name' name='name' value={contact.name} onChange={handleChangeInput} />
                                <input type="text" placeholder='Your Email' onChange={handleChangeInput} name='email' value={contact.email} />
                                <input type="text" placeholder='Your Phone' onChange={handleChangeInput} name='number' value={contact.number} />
                            </div>
                            <textarea name="message" placeholder='Your message' onChange={handleChangeInput} value={contact.message}></textarea>
                            <button className='py-2 px-4 send-message'>send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact