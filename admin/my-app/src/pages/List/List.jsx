import { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'


function ListItem({ url }) {
    const [list, setList] = useState()


    const fetchProductList = async () => {
        const response = await axios.get(url + "/api/product/get-all-product", { withCredentials: true })

        if (response.data.success) {
            setList(response.data.productlist)
        }
    }


    const removeProduct = async (id) => {
        const response = await axios.post(url + "/api/product/remove", { id }, { withCredentials: true });
        fetchProductList()

        if (response.data.success) {
            toast(response.data.message)
        }
    }

    useEffect(() => {
        fetchProductList()
    }, []);


    return (
        <div className="item-content">

            <div className="item-header d-flex">
                <p>product Image</p>
                <p>product name</p>
                <p>product category</p>
                <p>product price</p>
                <p>action</p>
            </div>
            {(list || []).map((item, index) => {
                return (
                    <div className="item" key={index}>
                        <img src={`${url}/images/` + item.prodimg} className='item-image' />
                        <p>{item.prodname}</p>
                        <p>{item.prodcategory}</p>
                        <p>{item.prodprice}</p>
                        <button className='remove-btn' onClick={() => {
                            removeProduct(item.id)
                        }}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ListItem