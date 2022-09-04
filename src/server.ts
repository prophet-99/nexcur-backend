import express from 'express';
import cors from 'cors';

import envConfig from './config/enviroment';

const app = express();
app.use(cors()).use('/test', (req, res) => res.json('Working'));

app.listen(envConfig.port, () =>
  console.log(`Listen in port: ${envConfig.port}`)
);
