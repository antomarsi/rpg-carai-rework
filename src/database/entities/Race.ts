import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({})
class Race {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  baseHP: number;

  @Column()
  baseMP: number;
}

export default Race;
