import express from "express"
import {login, logout, register} from "../controllers/auth.js"

const router=express.Router()


router.post("Login", login)
router.post("register", register)
router.post("logout", logout)


export default router