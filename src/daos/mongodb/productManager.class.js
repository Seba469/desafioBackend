import mongoose from 'mongoose'
import { productsModel } from './models/products.model.js'


export default class ProductManager{
    connection = mongoose.connect('mongodb+srv://sebaviberti2002:VMKIAaVspuyAzHi7@cluster0.smtxm6x.mongodb.net/?retryWrites=true&w=majority')
    
    addProducts = async (producto) => {
        try{
            let result = await productsModel.create(producto)
            return result
        }
        catch (error){
            console.error(error)
        }
    }

    getProducts = async (limit) => {
        try{   
            let result = await productsModel.find()
            return result
        }
        catch(error){
            console.log(error)
        }
    }

    getProductById = async (id) => {
        try{   
            let result = await productsModel.findOne({_id: id})
            return result
        }
        catch(error){
            console.log(error)
        }
    }

    updateProduct = async (id, infoNueva) => {
        try{
            let result = await productsModel.updateOne({_id: id}, {$set: infoNueva})
            return result
        }
        catch(error){
            console.log(error)
        }
    }

    deletProduct = async (id) => {
        try{   
            let result = await productsModel.deleteOne({_id: id})
            return result
        }
        catch(error){
            console.log(error)
        }
    }
}