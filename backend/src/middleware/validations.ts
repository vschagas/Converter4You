import { NextFunction, Request, Response } from 'express';
import Joi from 'joi'

const fieldMissing = 'Some required fields are missing';

const schema = Joi.object({
  baseCoin: Joi.string().required().messages({
    'any.required': fieldMissing,
    'string.empty': fieldMissing,
    'string.base': 'baseCoin must be a string'
  }),
  exchangeCoin: Joi.string().required().messages({
    'any.required': fieldMissing,
    'string.empty': fieldMissing,
    'string.base': 'exchangeCoin must be a string'

  }),
});

const validateSchema = async (req:Request, res:Response, next: NextFunction) => {
  const requirements = req.body;
  const { error } = schema.validate(requirements)

  if (error) {
    console.log(error.details[0].message);
    
    return res.status(400).json({ message: error.details[0].message })
  }

  return next()
}

export default validateSchema