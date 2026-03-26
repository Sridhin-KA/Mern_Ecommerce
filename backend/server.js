import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/ProductRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)


app.get('/',(req,res)=>{
    res.send('API is running')
})





const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})