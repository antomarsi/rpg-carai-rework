import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Character from './Character';
import GodPath from './GodPath';

@Entity()
class GodPathCharacter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  characterId: number;

  @Column()
  godPathId: number;

  @Column()
  level: number;

  @ManyToOne(() => Character, (character) => character.godPaths)
  character: Character;

  @ManyToOne(() => GodPath)
  godPath: GodPath;
}

export default GodPathCharacter;
