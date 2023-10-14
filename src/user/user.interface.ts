import { User } from '../entities/user';

export interface IUserRepository {
  findOne(id: number): Promise<User>;
}
