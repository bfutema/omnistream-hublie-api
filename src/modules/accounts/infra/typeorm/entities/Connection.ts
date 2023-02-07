import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('connections')
class Connection extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id?: number;
  
  @Column()
  accepted: boolean;

  @Column()
  blocked: boolean;

  @Column()
  invited_account_id: number;

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

export { Connection };
