import { useState } from 'react'
import './Add.css'
import axios from 'axios'
import { toast } from 'react-toastify'


function AddItem({ url }) {


    const [image, setImage] = useState(false)

    const [productValue, setProductValue] = useState({
        prodName: "",
        prodPrice: "",
        prodCategory: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setProductValue(prev => ({
            ...prev, [name]: value
        }))
    }

    const addProduct = async (e) => {

        const formData = new FormData();
        formData.append("prodName", productValue.prodName)
        formData.append("prodCategory", productValue.prodCategory)
        formData.append("prodPrice", productValue.prodPrice)
        formData.append("image", image)


        e.preventDefault()

        const response = await axios.post(url + "/api/product/add", formData)

        if (response.data.success) {
            setProductValue({
                prodName: "",
                prodPrice: "",
                prodCategory: ""
            });
            toast('product added')
            setImage(false)
        }

    }


    return (
        <>
            <form onSubmit={addProduct}>
                <div className="product-image">

                    <label htmlFor="product-image">Product image</label>
                    <input type="file" onChange={(e) => {
                        setImage(e.target.files[0])
                    }} required />
                </div>

                <div className="product-name">

                    <label htmlFor="product name">Product Name</label>
                    <input type="text" name='prodName' onChange={onChangeHandler} value={productValue.prodName} required />
                </div>

                <div className="product-price">

                    <label htmlFor="product price">Product price</label>
                    <input type="number" min={1} name='prodPrice' onChange={onChangeHandler} value={productValue.prodPrice} required />
                </div>
                <div className="product-category">
                    <label htmlFor="product-category">Product Category</label>
                    <select name="prodCategory" required onChange={onChangeHandler}>
                        <option value="flash sale">Flash Sale</option>
                        <option value="best selling">Best Selling Product</option>
                        <option value="Explore product">Explore Product</option>
                    </select>
                </div>
                <button type='submit' className='add-product'>ADD</button>
            </form>
        </>
    )
}

export default AddItem