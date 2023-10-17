import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user';
import { IUserRepository } from './user.interface';

@Injectable()
export class UserRepository extends Repository<User> implements IUserRepository {
	constructor(private dataSource: DataSource) {
		super(User, dataSource.createEntityManager());
	}

	async findOneUser(name: string): Promise<User> {
		try {
			return await this.findOne({ where: { name: name } });
		} catch (e) {
			console.log(e);
		}
	}

	async createUser(user: User): Promise<{ name: string; age: number; job: string }> {
		return await this.save(user);
	}
}
