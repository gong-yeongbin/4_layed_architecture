import { User } from '../entities/user';

export interface UserRepository {
  findById(id: number): Promise<User>;
}
