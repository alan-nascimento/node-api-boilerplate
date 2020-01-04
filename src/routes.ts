import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', async (req: Request, res: Response): Promise<Response> => res.json({ hello: 'world!' }));
routes.get('/users', async (req: Request, res: Response): Promise<Response> => res.json({ hello: 'users' }));

export default routes;
