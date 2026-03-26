import express from 'express'
import { protect,adminOnly } from '../middleware/authMiddleware.js'

const router = express.Router()

const addProduct = (req,res)=>{
    res.json({msg:'product added successfully'})
}

router.post('/addproduct',protect,adminOnly,addProduct)

export default router