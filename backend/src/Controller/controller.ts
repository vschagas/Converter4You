import { NextFunction, Request, Response } from "express";
import { Api } from '../utils/api'

export class ExchangeController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  
  constructor(req: Request, res: Response, next: NextFunction){
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async requestExchange() {
    const { baseCoin, exchangeCoin } = this.req.body
    try {
      const newClass =  new Api()
      const convertedValue = await newClass.exchange(baseCoin, exchangeCoin)
      
      return this.res.status(200).json(convertedValue)
    } catch (error) {
      console.log(error);
      
    }
  }
}