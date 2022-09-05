import { DatabaseError } from 'pg';

import { IAuthModel } from '../IAuthModel';

export interface IAuthResponse {
  success: boolean;
  isAuth: boolean;
  authUser: IAuthModel | undefined;
  error: DatabaseError | undefined;
}
