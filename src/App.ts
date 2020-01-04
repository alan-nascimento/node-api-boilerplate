import 'dotenv/config';

import express from 'express';

import routes from './routes';

class App {
  public server: express.Application = express();

  public constructor() {
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
