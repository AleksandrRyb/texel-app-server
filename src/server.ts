import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// import routes
//import { sampleRoutes } from './routes/sampleRoutes';

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Logging
app.use(morgan('combined'));

// API routes
// app.use('/api/sample', sampleRoutes);

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
