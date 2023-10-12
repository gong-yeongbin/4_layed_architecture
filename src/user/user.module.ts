import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PostgreRepository } from './postgre.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PostgreRepository,
    { provide: 'USER_REPO', useValue: UserService },
  ],
})
export class UserModule {}
