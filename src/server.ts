import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import env from '@config/env';

const { port } = env;

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Logging
app.use(morgan('combined'));

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
