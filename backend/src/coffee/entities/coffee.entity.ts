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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
