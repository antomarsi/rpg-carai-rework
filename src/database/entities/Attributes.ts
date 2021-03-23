import { Column } from 'typeorm';

abstract class Attributes {
  @Column({ comment: 'Destreza', default: 1 })
  dexterity: number;

  @Column({ comment: 'Força', default: 1 })
  strenght: number;

  @Column({ comment: 'Agilidade', default: 1 })
  agility: number;

  @Column({ comment: 'Inteligência', default: 1 })
  intelligence: number;

  @Column({ comment: 'Constituição', default: 1 })
  constitution: number;

  @Column({ comment: 'Espírito', default: 1 })
  spirit: number;

  @Column({ comment: 'Sabedoria', default: 1 })
  wisdom: number;
}

export default Attributes;
