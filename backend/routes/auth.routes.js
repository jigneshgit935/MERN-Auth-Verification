import express from 'express'
import { Login, Logout, SignUp } from '../controllers/auth.controller.js'

const router =express.Router()


router.get("/login",Login)

router.get("/signup",SignUp)

router.get("/logout",Logout)

export default router