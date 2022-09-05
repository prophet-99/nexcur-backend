import express from 'express';

import envConfig from '../config/enviroment';
import authRoutes from './authRoutes';

const app = express();
app.use(`${envConfig.baseApi}/auth`, authRoutes);

export default app;
