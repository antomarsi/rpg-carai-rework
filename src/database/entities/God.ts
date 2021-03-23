import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import GodPath from './GodPath';

@Entity({})
class God {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => GodPath, godPath => godPath.god)
  paths: GodPath[];
}

export default God;
