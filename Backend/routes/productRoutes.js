import express from 'express'
import multer from 'multer';
import { addProduct, listProduct, removeProduct } from '../controller/productController.js';
import sanitize from 'sanitize-filename';

const productRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const fileName = sanitize(file.originalname).replace(/\s+/g, '');
        return cb(null, `${Date.now()}${fileName}`)
    }
})

const upload = multer({ storage: storage })

productRouter.post("/add", upload.single("image"), addProduct)

productRouter.post("/remove", removeProduct)
productRouter.get("/get-all-product", listProduct)



export default productRouter