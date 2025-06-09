import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'

const userRouter = Router()

userRouter.post('/login', loginValidator, loginController)
userRouter.post('/register', registerValidator, registerController)

export default userRouter
