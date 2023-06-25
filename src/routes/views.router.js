import { Router } from "express";
import __dirname from "../utils.js";
import ProductManager from "../daos/mongodb/productManager.class.js";

const router = Router()

router.get('/', (req, res) => {
    res.render('home')
})

export default router