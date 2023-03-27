import { Router, Request, Response } from 'express'
import { AddUserFactory } from '@/adapters/express/factories/add-user.factory'

const userRoutes = Router()

userRoutes.post('/users/create', async (req: Request, res: Response) => {
  const { name, age, email } = req.body

  if (!name)
    return res.json({ message: 'Name is required.' }).status(400)

  if (!age)
    return res.json({ message: 'Age is required.' }).status(400)

  if (!email)
    return res.json({ message: 'Email is required.' }).status(400)

  try {
    const usecase = AddUserFactory.build()
    await usecase.execute({ name, age, email })

    return res.json({ status: 'OK' }).status(201)

  } catch (err) {
    return res.json({ err }).status(400)
  }
})

export default userRoutes
