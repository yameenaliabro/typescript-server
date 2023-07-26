import { Request, Response, NextFunction } from 'express';
import joi, { AnySchema, ValidationResult } from 'joi';
import { ApiError } from '../helpers';

const anySchema: AnySchema = joi.any();

const getMessage = (err: joi.ValidationError) =>
  err.details?.[0]?.type === 'any.custom' ? err.details[0].context!.error!.message : err.message;

const reqQueryValidator = (schema: AnySchema = anySchema) => (req: Request, res: Response, next: NextFunction) => {
  const { error: validationError, value: validValue }: ValidationResult = schema.validate(req.query);

  if (validationError) {
    next(new ApiError(400, `Invalid request query: ${getMessage(validationError)}`));
    return;
  }

  req.query = validValue;
  next();
};

const reqBodyValidator = (schema: AnySchema = anySchema) => (req: Request, res: Response, next: NextFunction) => {
  const { error: validationError, value: validValue }: ValidationResult = schema.validate(req.body);

  if (validationError) {
    next(new ApiError(400, `Invalid request body: ${getMessage(validationError)}`));
    return;
  }

  req.body = validValue;
  next();
};

export { reqQueryValidator, reqBodyValidator };
