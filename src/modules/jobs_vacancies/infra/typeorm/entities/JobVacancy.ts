import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('jobs_vacancies')
class JobVacancy extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id?: number;
  
  @Column()
  name: string;

  @Column()
  hiring_model: string;

  @Column()
  work_format: string;

  @Column()
  budget: number;

  @Column()
  expiration_date: Date;

  @Column()
  is_afirmative: boolean;

  @Column()
  afirmative_group: string;

  @Column()
  description: string;

  @Column()
  company_id: number;

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

export { JobVacancy };
