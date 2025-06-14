import { Request, Response, NextFunction } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'

export const wrapRequestHandler = <Params = ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = ParsedQs>(
  handler: (req: Request<Params, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request<Params, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction) => {
    handler(req, res, next).catch(next)
  }
}
