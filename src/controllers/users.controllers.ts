import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterReqBody } from '~/models/requests/User.requests'
import usersService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'lechinghia202@gmail.com' && password === '123456') {
    res.status(200).json({ message: 'Login successful' })
  }
  res.status(401).json({ error: 'Invalid email or password' })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await usersService.register(req.body)
    res.json({ message: 'Register successful', result })
  } catch (error) {
    res.status(400).json({ error: 'Register failed' })
  }
}
