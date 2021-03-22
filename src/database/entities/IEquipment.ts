export enum EquipmentPart {
  WEAPON,
  HEAD,
  NECK,
  SHOULDER,
  BACK,
  BODY,
  ARMS,
  HANDS,
  BELT,
  FINGER,
  EARING,
  FOOT,
}

export default interface IEquipment {
  name: string;
  description: string;
  part: EquipmentPart;

  physicalAttack: number;
  distanceAttack: number;
  magicalAttack: number;

  physicalDefense: number;
  magicalDefense: number;
}
