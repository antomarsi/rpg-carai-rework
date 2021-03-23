import Attributes from './Attributes';
import GodPathCharacter from './GodPathCharacter';
import User from './User';
import RaceCharacter from './RaceCharacter';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
class Character extends Attributes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'Nome do Personagem',
  })
  name: string;

  @Column({ default: 1, comment: 'Nivel do personagem' })
  level: number;

  @Column({ comment: 'Experiencia Total' })
  totalExperience: number;

  @Column({ comment: 'Atributo Extra', default: 1 })
  extraAttribute: number;

  @ManyToOne(() => RaceCharacter, (raceCharacter) => raceCharacter.character)
  races: RaceCharacter[];

  @ManyToOne(
    () => GodPathCharacter,
    (godPathCharacter) => godPathCharacter.character,
    { nullable: true },
  )
  godPaths: GodPathCharacter[];

  @ManyToOne('User', 'characters', { nullable: false })
  user: User;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

export default Character;
