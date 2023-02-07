import { injectable, inject } from 'tsyringe';

import { Address } from '../../infra/typeorm/entities/Address';
import { IListAddress } from '../../dtos/IAddressDTO';
import { IAddressesRepository } from '../../repositories/IAddressesRepository';

@injectable()
class ListAddressUseCase {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
  ) {}

  public async execute(params: IListAddress): Promise<[Address[], number]> {
    const addresses = await this.addressesRepository.find(params);

    return addresses;
  }
}

export { ListAddressUseCase };
