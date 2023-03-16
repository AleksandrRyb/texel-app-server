import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import SchemeRoutes from '@routes/scheme.routes';
import env from '@config/env';

const { port } = env;
const schemeRoutes = new SchemeRoutes();

class Server {
  private app: Application;

  constructor() {
    this.app = express();

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
  }

  public start(): void {
    this.app.listen(port, () => console.log(`Server started on port ${port}`));
  }
}

export default Server;
