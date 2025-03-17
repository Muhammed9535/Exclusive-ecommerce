import './App.css'
import Nav from './component/nav/nav'
import { Routes, Route } from 'react-router-dom'
import AddItem from './pages/Add/Add'
import ListItem from './pages/List/List'
import OrderItem from './pages/Order/Order'
import SideBar from './component/sidebar/sidebar'
import Message from './pages/Messages/Message'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const url = "http://localhost:3000"
  const [menu, setMenu] = useState(true)

  const changeMenuIcon = () => {
    setMenu(prev => !prev)
  }
  return (
    <>
      <ToastContainer />
      <div className="container-fluid">
        <Nav menu={menu} changeMenuIcon={changeMenuIcon} />
      </div>
      <hr />
      <div className="container-fluid d-flex mt-5 content">
        <SideBar menu={menu} />
        <Routes>
          <Route path='/add' element={<AddItem url={url} />} />
          <Route path='/product' element={<ListItem url={url} />} />
          <Route path='/order' element={<OrderItem url={url} />} />
          <Route path='/feedback' element={<Message url={url} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
