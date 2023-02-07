import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('accounts')
class Account extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  id?: number;
  
  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  email_confirmed: boolean;

  @Column()
  phone: string;

  @Column()
  password_hash: string;

  @Column()
  security_stamp: string;

  @Column()
  two_factor_enabled: boolean;

  @Column()
  lockout_enabled: boolean;

  @Column()
  lockout_expires: Date;

  @Column()
  access_failed_count: number;

  @Column()
  account_enabled: boolean;

  @Column()
  profile_id: number;

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

export { Account };
