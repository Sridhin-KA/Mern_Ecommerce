import express from 'express'
import { protect,adminOnly } from '../middleware/authMiddleware.js'
import { addProduct } from '../controllers/productController.js'



const router = express.Router()



router.post('/addproduct',protect,adminOnly,addProduct)

export default router