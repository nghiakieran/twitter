import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'lechinghia202@gmail.com' && password === '123456') {
    res.status(200).json({ message: 'Login successful' })
  }
  res.status(401).json({ error: 'Invalid email or password' })
}
