import dotenv from 'dotenv'
import express from 'express'
import products from './data.js'
import connectDB from '../config/db.js'
import colors from 'colors'

dotenv.config()

connectDB()


const app = express()

app.get('/', (req, res) => {
	res.send('Home')
})

app.get('/api/products', (req, res) => {
	res.send(products)
})

app.get('/api/products/:id', (req, res) => {
	const theProduct = products.find(p => p._id === req.params.id)
	res.send(theProduct)
})

app.listen(process.env.PORT, console.log(`Listening on ${process.env.PORT} in ${process.env.NODE_ENV}`.yellow.bold))