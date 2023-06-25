import { Router } from "express";
import CartManager from "../daos/mongodb/cartManager.class.js";

const router = Router();

const cartManager = new CartManager

router.get('/', async (req, res) => {
    const carros = await cartManager.getCarts()
    res.send(carros);
})

router.get('/:id', async (req, res) => {
    const carro = await cartManager.getCartById(req.params.id)

    if (carro != null){
        res.send(carro)
    }else{
        res.send({status: "Ese carro no exite"})
    }
})

router.post('/', async (req, res) => {
    await cartManager.addCart();
    res.send({ status: "success" });
})

router.post('/:cid/products/:pid', async (req, res) => {  
    const resultado = await cartManager.addProductToCart(req.params.cid, req.params.pid);

    if (resultado === null){
        res.send({ status: "el carro o producto selecionado no existe" })
    }else{
        res.send({ status: "success" }); 
    }
})

export default router;