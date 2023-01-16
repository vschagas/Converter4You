import { Router } from "express"

const route = Router()

route.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is on' })
})

export default route