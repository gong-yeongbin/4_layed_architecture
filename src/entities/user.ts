import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'name', type: 'varchar' })
	name: string;

	@Column({ name: 'age', type: 'integer' })
	age: number;

	@Column({ name: 'job', type: 'varchar' })
	job: string;
}
