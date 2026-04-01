import Product from "../models/Product.js";

//create product

export const addProduct = async(req,res)=>{
    try{
        const {name,price,description,image,countInStock} = req.body

        //validation
        console.log(name,price,description,image,countInStock)
        if(!name || !price || !description || !image || !countInStock){
            return res.status(400).json({msg:'All fields are required'})
        }

        const product = await Product.create({
            name,
            price,
            description,
            image,
            countInStock,

    })
    res.status(201).json(product)

    }catch(err){
        res.status(500).json({error:err.message})
    }
}


export const getProducts = async(req,res)=>{
    try{
        const products = await Product.find()
        res.json(products)
    }catch(error){
        res.status(500).json({error:error.message}) 
    }
}


export const getProductById = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.json(product)
    }catch(error){
        res.status(500).json({error:error.message}) 
    }
}