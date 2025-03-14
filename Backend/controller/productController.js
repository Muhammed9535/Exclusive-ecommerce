import pool from "../config/eccormerceModel.js";
import fs from 'fs'
const addProduct = async (req, res) => {
    const { prodName, prodPrice, prodCategory } = req.body
    let image_filename = req.file.filename;

    try {
        const result = await pool.query("INSERT INTO products (prodimg, prodname, prodprice, prodcategory) VALUES ($1, $2, $3, $4) RETURNING *", [image_filename, prodName, prodPrice, prodCategory])


        res.json({ success: true, message: result.rows[0] })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error })
    }
}

const removeProduct = async (req, res) => {
    try {

        const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [req.body.id])


        fs.unlink(`uploads/${result.rows[0].prodimg}`, () => {
        })


        res.json({ success: true, message: "product deleted" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'error' })
    }


}


const listProduct = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.json({ success: true, productlist: result.rows })
    } catch (error) {
        console.log(error)
        res.json({ success: true, message: "error" })
    }
}


export { addProduct, removeProduct, listProduct }
