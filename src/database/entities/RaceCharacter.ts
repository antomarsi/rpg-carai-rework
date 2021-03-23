import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Character from './Character';
import Race from './Race';

@Entity()
class RaceCharacter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level: number;

  @ManyToOne(() => Character, (character) => character.races)
  character: Character;

  @ManyToOne(() => Race)
  Race: Race;
}

export default RaceCharacter;
