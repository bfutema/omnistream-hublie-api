import { getRepository } from 'typeorm';

import { IConnectionsRepository } from '@modules/accounts/repositories/IConnectionsRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Connection } from '../entities/Connection';

class ConnectionsRepository
  extends BaseRepository<Connection>
  implements IConnectionsRepository {
    constructor() {
      super(getRepository(Connection));
    }
  }

export { ConnectionsRepository };
