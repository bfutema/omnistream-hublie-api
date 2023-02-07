import { getRepository } from 'typeorm';

import { IAddressesRepository } from '@modules/commons/repositories/IAddressesRepository';
import { BaseRepository } from '@shared/infra/typeorm/repositories/BaseRepository';

import { Address } from '../entities/Address';

class AddressesRepository
  extends BaseRepository<Address>
  implements IAddressesRepository {
    constructor() {
      super(getRepository(Address));
    }
  }

export { AddressesRepository };
