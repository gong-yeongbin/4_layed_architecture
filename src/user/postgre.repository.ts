import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user';

@Injectable()
export class PostgreRepository
  extends Repository<User>
  implements UserRepository
{
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  findById(id: number): Promise<User> {
    ``;
    return this.findOne({ where: { id: id } });
  }
}
