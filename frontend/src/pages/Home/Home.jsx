import Nav from "../../components/Nav/Nav"
import Hero from "../../components/Hero/Hero"
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay"
import Category from "../../components/Category/Category"
import SectionHeader from "../../components/SectionHeader/SectionHeader"
import { assets } from "../../assets"
import NewArrival from "../../components/NewArrival/NewArrival"
import Footer from "../../components/Footer/Footer"

function Home() {
    return (
        <>
            <div className="container">
                <Nav />
            </div>
            <hr />
            <div className="container">
                <Hero />
                <ProductDisplay text="Today's" category="Flash Sales" />
                <hr />
                <Category />
                <ProductDisplay text="This month" category="Best selling Product" />
                <div className="container">
                    <img src={assets.banner2} alt="" />

                </div>
                <ProductDisplay text="Our Products" category="Explore Our Products" />
                <SectionHeader text="Featured" category="New Arrival" />
                <NewArrival />
            </div>
            <Footer />
        </>
    )
}

export default Home