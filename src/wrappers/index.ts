import { omitNullish } from '../helpers/objectUtils';
import { RequestHandler } from '../helpers';

import apiCatch from './apiCatch';
import authedOnly from './authedOnly';
import validate, { RequestSchemas } from './validate';

export { apiCatch };
export { authedOnly };
export { validate };

export interface RequestHandlerWrapper {
  (handler: RequestHandler): RequestHandler;
}

export const composeWrappers = (...wrappers: RequestHandlerWrapper[]) => {
  return (handler: any) => {
    return wrappers.reduceRight((result, wrapper) => wrapper(result), handler);
  };
};

export interface BuildWrapperOptions {
  catch?: boolean;
  validate?: RequestSchemas;
  authedOnly?: boolean;
}

export const buildWrapper = (options: BuildWrapperOptions) => {
  return composeWrappers(...omitNullish<RequestHandlerWrapper[]>([
    // @ts-ignore
    !options.authedOnly ? null : authedOnly,
    // @ts-ignore
    !options.validate ? null : validate(options.validate),
    // @ts-ignore
    !options.catch ? null : apiCatch,
  ]));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const wrap = (handler: any, options: BuildWrapperOptions) => {
  return buildWrapper(options)(handler);
};
