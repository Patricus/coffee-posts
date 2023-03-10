import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Coffee } from 'src/coffee/entities/coffee.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  coffee_id: number;

  @Column({ name: 'text', type: 'text' })
  text: string;

  @Column()
  rating: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @ManyToOne(() => Coffee, (coffee) => coffee.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'coffee_id' })
  coffee: Coffee;
}
