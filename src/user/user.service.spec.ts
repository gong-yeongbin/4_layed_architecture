import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { IUserRepository } from './user.interface';
import { ConflictException } from '@nestjs/common';

class MockUserRepository implements IUserRepository {
	findOneUser = jest.fn();
	createUser = jest.fn();
}

describe('UserService', () => {
	let service: UserService;
	let userRepository: IUserRepository;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UserService, { provide: 'UserRepository', useClass: MockUserRepository }],
		}).compile();

		service = module.get<UserService>(UserService);
		userRepository = module.get<IUserRepository>('UserRepository');
	});

	describe('유저 생성', () => {
		it('[실패] 유저 정보 중복 exception', async () => {
			(userRepository.findOneUser as jest.Mock).mockResolvedValue({ name: '홍길동', age: 18, job: '학생' });
			const mockUser = { name: '홍길동', age: 18, job: '학생' };

			await expect(async () => {
				await service.create(mockUser);
			}).rejects.toThrowError(new ConflictException());
		});

		it('[성공] 유저 생성', async () => {
			(userRepository.findOneUser as jest.Mock).mockReturnValue(null);
			(userRepository.createUser as jest.Mock).mockReturnValue({ name: '베트맨', age: 18, job: '영웅' });

			const mockUser = { name: '베트맨', age: 18, job: '영웅' };
			const userEntity = await service.create(mockUser);

			expect(userEntity).toEqual(mockUser);
		});
	});
	it.todo('modify user');
	it.todo('delete user');
});
