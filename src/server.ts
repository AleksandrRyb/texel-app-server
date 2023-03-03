import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import env from '@config/env';
import { SchemeRoutes } from '@routes/scheme.routes';

const { port } = env;
const schemeRoutes = new SchemeRoutes();

class Server {
  private app: Application;

  constructor() {
    // Create Express server
    this.app = express();

    // Express configuration
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());

    //Routes
    this.app.use('/', schemeRoutes.router);

    // Logging
    this.app.use(morgan('combined'));
  }

  public start(): void {
    this.app.listen(port, () => console.log(`Server started on port ${port}`));
  }
}

export default Server;
