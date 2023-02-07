import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('associations_recruiters_jobs_vacancies')
class AssociationsRecruitersJobsVacancies extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id?: number;
  
  @Column()
  job_vacancy_id: number;

  @Column()
  recruiter_id: number;

  /* FIELDS */

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;

  /**
   * RELATIONS
   */
}

export { AssociationsRecruitersJobsVacancies };
