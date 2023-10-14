import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from './user.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id: id } });
  }
}
