import express from 'express'

const router = express.Router()

//controllers
import {getCurrentUser, login} from '../controllers/userController.js'



router.route('/').get(getCurrentUser)
router.route('/login').post(login)




export default router