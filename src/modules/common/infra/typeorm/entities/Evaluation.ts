import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('evaluations')
class Evaluation extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id?: number;
  
  @Column()
  worked_with: boolean;

  @Column()
  relation: string;

  @Column()
  recommendation: string;

  @Column()
  account_id: number;

  @Column()
  created_by: number;

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

export { Evaluation };
