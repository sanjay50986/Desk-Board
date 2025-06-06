import express from 'express'
import { forgetPassword, googleLogin, login, resendOtp, sendOtp, signUp, verifyOtp} from '../controllers/auth.controller.js'

export const authRoutes = express.Router()

authRoutes.post("/google-login", googleLogin)
authRoutes.post("/send-otp", sendOtp)
authRoutes.post("/verify-otp", verifyOtp)
authRoutes.post("/resend-otp", resendOtp)
authRoutes.post("/sign-up", signUp)
authRoutes.post("/login", login)
authRoutes.post("/forget-password", forgetPassword)
