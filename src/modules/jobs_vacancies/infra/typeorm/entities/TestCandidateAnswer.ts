import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('test_candidate_answers')
class TestCandidateAnswer extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id?: number;
  
  @Column()
  test_alternative_id: number;

  @Column()
  answered_test_id: number;

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

export { TestCandidateAnswer };
