import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('professional_experiences')
class ProfessionalExperience extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id?: number;
  
  @Column()
  title: string;

  @Column()
  job_type: string;

  @Column()
  company_name: string;

  @Column()
  location: string;

  @Column()
  start_date_month: number;

  @Column()
  start_date_year: number;

  @Column()
  end_date_month: number;

  @Column()
  end_date_year: number;

  @Column()
  description: string;

  @Column()
  candidate_id: number;

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

export { ProfessionalExperience };
