import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('logger-middleware-class used');
    console.log("req.host: ", req.host);
    console.log("req.hostname: ", req.hostname);
    console.log("req.ip: ", req.ip);
    console.log("req.method: ", req.method);
    console.log("req.body: ", req.body);
    console.log("req.query: ", req.query);
    console.log("req.params: ", req.params);
    console.log("req.headers: ", req.headers);
    console.log("req.route: ", req.route);
    
    next();
  }
}
