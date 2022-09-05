import express from 'express';
import cors from 'cors';

import envConfig from './config/enviroment';
import routes from './routes';

const app = express();
app.use(cors()).use(express.json()).use(routes);

app.listen(envConfig.port, () =>
  console.log(`Listen in port: ${envConfig.port}`)
);
