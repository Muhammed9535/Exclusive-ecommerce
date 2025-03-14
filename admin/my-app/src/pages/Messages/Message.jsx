import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import './Message.css'

function Message({ url }) {
    const [messages, setMessages] = useState([])


    const getFeedback = async () => {
        const response = await axios.get(url + "/api/contact/get-contact")
        if (response.data.success) {
            setMessages(response.data.message)
        }
    }



    useEffect(() => {
        getFeedback()
    }, [])


    return (
        <div className="feedbacks">
            {messages.map((message, index) => (
                <div key={index} className="feedback d-flex mb-5">
                    <p>{message.name}</p>
                    <p>{message.email}</p>
                    <p>{message.number}</p>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Message