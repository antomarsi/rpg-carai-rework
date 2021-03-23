import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User from './User';

@Entity()
class Annotation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text' })
  text: string;

  @ManyToOne(() => User, user=> user.annotations)
  user: User;
}

export default Annotation;
