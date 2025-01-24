import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import ProductDisplay from "./components/ProductDisplay/ProductDisplay"
import Category from "./components/Category/Category"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Nav />
      </div>
      <hr />
      <div className="container">
        <Hero />
        <ProductDisplay />
        <Category />
        <hr />
      </div>
    </>
  )
}

export default App
