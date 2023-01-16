import { Router } from "express"
import { ExchangeController } from './Controller/controller'

const route = Router()

route.get('/', (req, res, next) => new ExchangeController(req, res, next).requestExchange())

export default route