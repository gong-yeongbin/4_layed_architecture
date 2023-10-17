export interface IUserRepository {
	findOneUser(name: string): Promise<{ name: string; age: number; job: string }>;

	createUser(createUserDto: { name: string; age: number; job: string }): Promise<{ name: string; age: number; job: string }>;
}
