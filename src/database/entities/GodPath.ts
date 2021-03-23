import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import God from './God';

@Entity({})
class GodPath {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => God, (god) => god.paths)
  god: God;
}

export default GodPath;
