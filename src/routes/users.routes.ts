import { Router } from 'express'
import { loginController, logoutController, registerController } from '~/controllers/users.controllers'
import { accessTokenValidator, loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const userRouter = Router()

userRouter.post('/login', loginValidator, wrapRequestHandler(loginController))
userRouter.post('/register', registerValidator, wrapRequestHandler(registerController))
userRouter.post('/logout', accessTokenValidator, wrapRequestHandler(logoutController))

export default userRouter
