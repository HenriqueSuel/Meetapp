import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json('Hello Word');
});

export default routes;
