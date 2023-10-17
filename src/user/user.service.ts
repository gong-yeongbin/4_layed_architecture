import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from './user.interface';
import { User } from '../entities/user';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
	constructor(
		@Inject('UserRepository')
		private readonly userRepository: IUserRepository
	) {}

	async create(createUserDto: CreateUserDto) {
		const user: User = new User();
		user.name = createUserDto.name;
		user.age = createUserDto.age;
		user.job = createUserDto.job;

		const userEntity = await this.userRepository.findOneUser(user.name);

		if (userEntity) throw new ConflictException();

		return await this.userRepository.createUser(user);
	}
	modify() {}
	delete() {}
}
