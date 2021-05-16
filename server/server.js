import dotenv from 'dotenv'
import express from 'express'
import connectDB from '../config/db.js'
import colors from 'colors'

import productRoutes from '../routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()


app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
	res.send('Home')
})


app.listen(process.env.PORT, console.log(`Listening on ${process.env.PORT} in ${process.env.NODE_ENV}`.yellow.bold))