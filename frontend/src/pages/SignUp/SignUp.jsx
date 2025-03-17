import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import './SignUp.css'
import { assets } from "../../assets"
import { StoreContext } from "../../context/context"
import { useNavigate } from "react-router"
import { toast } from 'react-toastify'
import { assets, } from '../../assets';

function SignUp() {


    const { url, setShowLogin, setSessionId, loadCartData, loadWishList, setPerson } = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("sign up");
    const [data, setData] = useState({
        name: "",
        username: "",
        password: ""
    })

    const changeCurrentState = () => {
        setCurrentState(prev => {
            if (prev === "sign up") {
                return "login"
            } else {
                return "sign up"
            }
        })
    }


    const handleInputData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prev => ({ ...prev, [name]: value }))
    }

    const navigate = useNavigate();

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currentState == 'login') {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }

        console.log(newUrl)

        const response = await axios.post(newUrl, data, { withCredentials: true })

        if (response.data.success) {
            setShowLogin(false);
            console.log(response.data.sessionId)
            console.log(response.data.success)
            localStorage.setItem("log in token", response.data.sessionId);
            navigate("/");
            await loadCartData()
            await loadWishList()
            setSessionId(response.data.sessionId)
            setPerson(response.data.name)
            console.log(response.data.name);

            toast(response.data.message)

        } else {
            console.log(response.data.message);
            toast(response.data.message)
        }


    }




    return (
        <div className="signup-content my-5 px-5 container-fluid">
            <div className="signup-img">
                <img src={assets.formpic} alt="" className="form-img" />
            </div>
            <div className="form-container">
                <form onSubmit={onLogin} className="form-con">
                    <h3>{currentState === "sign up" ? "Create an account" : "Log in to Exclusive"}</h3>
                    <p>Enter your details below</p>
                    {currentState === "sign up" ? <input type="text" name="name" placeholder="Name" onChange={handleInputData} /> : ""}
                    <input type="email" onChange={handleInputData} name="username" placeholder="Email" />
                    <input type="password" onChange={handleInputData} name="password" placeholder="password" />
                    {currentState === "sign up" ? <button type="submit" className="sign-in">Create Account</button> : <div className="d-flex justify-content-between login-con">
                        <button type="submit" className="login">Login</button> <p>forgot Password?</p>
                    </div>}

                </form>
                <a href=""></a>
                <p>already have an account? <span onClick={() => {
                    changeCurrentState();
                }}>{currentState === "sign up" ? "Login" : "Sign In"}</span></p>
            </div>
        </div>
    )
}

export default SignUp
