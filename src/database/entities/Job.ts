import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';

@Entity({})
class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Job, job => job.jobs)
  parentJob: Job;

  @ManyToOne(() => Job, job => job.parentJob)
  jobs: Job[];

  @Column()
  name: string;

  @Column()
  baseHP: number;

  @Column()
  baseMP: number;
}

export default Job;
