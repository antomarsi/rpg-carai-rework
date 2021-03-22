export enum SKILL_TYPE {
    PASSIVE,
    ACTIVE
}

export default interface ISkill {
  id: number;
  name: string;
  description: string;
  type: SKILL_TYPE
}
