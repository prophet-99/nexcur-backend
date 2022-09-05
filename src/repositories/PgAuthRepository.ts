import PgConnection from './connection/PgConnection';
import { IAuthModel } from './models/IAuthModel';
import { IAuthRequest } from './models/requests/IAuthRequest';

class PgAuthRepository {
  private pgConnection = new PgConnection();

  public async authByCredentials(request: IAuthRequest): Promise<IAuthModel> {
    const { pool } = this.pgConnection;
    const { user, password } = request;

    const rawData = await pool.query('select * from fn_login($1, $2);', [
      user,
      password,
    ]);
    const parsedData = rawData.rows[0];
    const data: IAuthModel = {
      lastName: parsedData.lastname,
      name: parsedData.name,
      userId: parsedData.idusuario,
    };
    return data;
  }
}

export default PgAuthRepository;
