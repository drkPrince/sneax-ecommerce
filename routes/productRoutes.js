

import express from 'express'
import Products from '../models/productModel.js'


const router = express.Router()

router.get('/', async (req, res) => {
	const allProducts = await Products.find({})
	res.send(allProducts)
})

router.get('/:id', async (req, res) => {
	console.log(req.params.id)
	const theProduct = await Products.findById(req.params.id)
	res.send(theProduct)
})



export default router