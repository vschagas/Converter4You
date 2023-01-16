import { Router } from "express"
import { ExchangeController } from './Controller/controller'
import validateSchema from "./middleware/validations"


const route = Router()

route.get('/',validateSchema, (req, res, next) => new ExchangeController(req, res, next).requestExchange())

export default route