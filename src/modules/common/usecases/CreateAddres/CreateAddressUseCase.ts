import { injectable, inject } from 'tsyringe';

import { Address } from '../../infra/typeorm/entities/Address';
import { ICreateAddress } from '../../dtos/IAddressDTO';
import { IAddressesRepository } from '../../repositories/IAddressesRepository';

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
  ) {}

  public async execute(data: ICreateAddress): Promise<Address> {
    const { id } = await this.addressesRepository.create(data);

    const createdAddress = await this.addressesRepository.findById({ id });

    return createdAddress;
  }
}

export { CreateAddressUseCase };
