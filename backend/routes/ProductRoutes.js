import express from 'express'
import { protect,adminOnly } from '../middleware/authMiddleware.js'
import { addProduct,getProducts,getProductById } from '../controllers/productController.js'



const router = express.Router()



router.post('/addproduct',protect,adminOnly,addProduct)
router.get('/',getProducts)
router.get('/:id',getProductById)

export default router