import { NextFunction } from 'express';

import { createLogger } from '../helpers';
import { Request, Response } from '../helpers';
import {ApiError }from '../helpers';

const logger = createLogger('🛑 Api Error Handler');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (err: Error | ApiError, req: Request, res: Response, _next: NextFunction) {
  logger.warn(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status('status' in err ? err.status : 500).send({
    message: err.message,
  });
}
