import express, { Request, Response } from 'express';
var statusRouter = express.Router();


statusRouter.get('/', (req: Request, res: Response): void => {
    res.send("status")
  });



//   export default statusRouter; === (module.exports = statusRouter);
  export default statusRouter;