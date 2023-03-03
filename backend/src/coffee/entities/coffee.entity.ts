import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  year: number;

  @Column({ name: 'caffeine_content', type: 'numeric' })
  caffeine_content: number;

  @Column({ name: 'caffeine_percentage', type: 'numeric' })
  caffeine_percentage: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

}
