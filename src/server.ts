import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import SchemeRoutes from '@routes/scheme.routes';
import { env } from '@config/env';
import { logger } from '@config/logger';

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

    this.app.use('/', schemeRoutes.router);
  }

  public start(): void {
    this.app.listen(port, () => {
      if (process.env.NODE_ENV === 'production') {
        logger.info(`Server started on port ${port}`);
      } else {
        console.log(`Server started on port ${port}`);
      }
    });
  }
}

export default Server;
