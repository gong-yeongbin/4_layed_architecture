import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPO')
    private readonly userRepository: UserRepository,
  ) {}
  findUser() {
    this.userRepository.findById(1);
  }
}
