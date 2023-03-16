import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define the config object
export const env = {
  port: process.env.PORT || 4000,
};
