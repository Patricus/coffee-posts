import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
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

  @Column({ name: 'rating', type: 'numeric' })
  rating: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Coffee, (coffee) => coffee.id)
  coffee: Coffee;
}
