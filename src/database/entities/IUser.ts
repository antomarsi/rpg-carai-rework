import ICharacter from './ICharacter';
import IAnnotation from './IAnnotation';

export default interface IUser {
  id?: number;
  name: string;
  
  charactersIds: number[]
  annotationsIds: number[]

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
