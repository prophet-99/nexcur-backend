import { Router } from 'express';

import { authByUserAndPassword } from '../controllers/authController';

const router = Router();
router.post('/', authByUserAndPassword);

export default router;
