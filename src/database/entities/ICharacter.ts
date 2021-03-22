import IAttributes from './IAttributes';

export default interface ICharacter extends IAttributes {
  id: number;
  name: string;
  level: number;
  totalExperience: number;
  extraAttribute: number;
  raceLevel: number;

  godPathsIds: number[]
}
