import mongoose from 'mongoose'
import { cartModel } from './models/carts.model.js'
import ProductManager from './productManager.class.js'

export default class CartManager{    
    connection = mongoose.connect('mongodb+srv://sebaviberti2002:VMKIAaVspuyAzHi7@cluster0.smtxm6x.mongodb.net/?retryWrites=true&w=majority')
    productManager = new ProductManager()

    addCart = async () => {
        try{
            const result = await cartModel.create({products: []})
            return result
        }
        catch(error){
            console.log(error)
        }
    }

    getCarts = async () => {
        try{
            const result = await cartModel.find()
            return result
        }
        catch(error){
            console.log(error)
        }
    }
    
    getCartById = async (id) => {
        try{
            const result = await cartModel.findOne({_id: id})
            return result
        }
        catch(error){
            console.log(error)
        }
    }
    
    addProductToCart = async (cartId, productId) => {
        try{
           const producto = await this.productManager.getProductById(productId)
           const carrito = await this.getCartById(cartId)

           carrito.products.push({product: producto})
           await carrito.save()
           return
        }
        catch(error){
            console.log(error)
        }
    }


}