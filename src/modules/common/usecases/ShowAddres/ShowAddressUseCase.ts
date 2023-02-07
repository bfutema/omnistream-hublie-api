import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Address } from '../../infra/typeorm/entities/Address';
import { IShowAddress } from '../../dtos/IAddressDTO';
import { IAddressesRepository } from '../../repositories/IAddressesRepository';

@injectable()
class ShowAddressUseCase {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
  ) {}

  public async execute({ id }: IShowAddress): Promise<Address> {
    const address = await this.addressesRepository.findById({ id });

    if (!address) {
      throw new AppError('Address not found!', 404);
    }

    return address;
  }
}

export { ShowAddressUseCase };
