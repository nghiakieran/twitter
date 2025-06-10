import express, { NextFunction, Request, Response } from 'express'
import userRouter from '~/routes/users.routes'
import databaseService from '~/services/database.services'
const app = express()
const port = 3000

app.use(express.json())
app.use('/users', userRouter)
databaseService.connect()

// default error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error:', err)
  res.status(400).json({ error: err.message })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
