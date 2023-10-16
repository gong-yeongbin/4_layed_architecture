import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from './user.interface';
import { CreateUserDto } from './create-user.dto';
import { User } from '../entities/user';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user: User = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;

    await this.userRepository.createUser(user);
  }
}
