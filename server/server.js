import dotenv from 'dotenv'
import express from 'express'
import colors from 'colors'
import connectDB from '../config/db.js'

import productRoutes from '../routes/productRoutes.js'
import userRoutes from '../routes/userRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json()) //allows parsing of json in body

//Routes
app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)


app.listen(process.env.PORT, console.log(`Listening on ${process.env.PORT} in ${process.env.NODE_ENV}`.yellow))