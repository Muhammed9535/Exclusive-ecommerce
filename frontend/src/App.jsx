import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import { Routes, Route } from 'react-router-dom'
import SignUp from "./pages/SignUp/SignUp"
import Footer from "./components/Footer/Footer"
import Nav from './components/Nav/Nav'
import WishList from "./pages/wishList/WishList"
import Cart from "./pages/Cart/Cart"
import Account from "./pages/Account/Account"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import UndefinedPage from "./pages/UndefinedPage/UndefinePage"
import Checkout from "./pages/Checkout/Checkout"
import VerifyOrder from "./pages/VerifyOrder/VerifyOrder"
import MyOrder from "./pages/MyOrder/MyOrder"
import CancelOrder from "./pages/CancelOrder/CancelOrder"
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <div className="container-fluid ">
        <Nav />
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/checkout" element={<Checkout />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="account" element={<Account />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="verify" element={<VerifyOrder />} />
        <Route path="myorders" element={<MyOrder />} />
        <Route path="cancel-order" element={<CancelOrder />} />
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
