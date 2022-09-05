import { Request, Response } from 'express';
import { DatabaseError } from 'pg';

import { IAuthResponse } from '../repositories/models/responses/IAuthResponse';
import PgAuthRepository from '../repositories/PgAuthRepository';

const authByUserAndPassword = async (req: Request, res: Response) => {
  const pgAuthRepository = new PgAuthRepository();
  try {
    const { user, password } = req.body;
    const authUser = await pgAuthRepository.authByCredentials({
      user,
      password,
    });
    const response: IAuthResponse = {
      authUser,
      error: undefined,
      isAuth: true,
      success: true,
    };

    res.status(200).json(response);
  } catch (err) {
    const parsedErr = err as DatabaseError;
    const response: IAuthResponse = {
      authUser: undefined,
      error: parsedErr,
      isAuth: false,
      success: false,
    };

    res.status(500).json(response);
  }
};

const test = (req: Request, res: Response) => {
  res.status(5050).json({
    check: true,
    message: 'Is everything ok',
  });
};

export { authByUserAndPassword, test };
