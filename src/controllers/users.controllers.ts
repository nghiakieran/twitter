import { Request, Response } from 'express'
import usersService from '~/services/users.services'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'lechinghia202@gmail.com' && password === '123456') {
    res.status(200).json({ message: 'Login successful' })
  }
  res.status(401).json({ error: 'Invalid email or password' })
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await usersService.register({ email, password })
    return res.json({ message: 'Register successful', result })
  } catch (error) {
    return res.status(400).json({ error: 'Register failed' })
  }
}
