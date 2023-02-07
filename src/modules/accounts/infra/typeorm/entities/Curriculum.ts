import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('curriculums')
class Curriculum extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id?: number;
  
  @Column()
  name: string;

  @Column()
  size: number;

  @Column()
  key: string;

  @Column()
  url: string;

  @Column()
  account_id: number;

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

export { Curriculum };
