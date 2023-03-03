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

  @Column({ name: 'text', type: 'longtext' })
  text: string;

  @Column({ name: 'rating', type: 'numeric' })
  rating: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @ManyToOne(() => Coffee, (coffee) => coffee.id)
  coffee: Coffee;
}
