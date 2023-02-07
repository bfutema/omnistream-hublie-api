import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Address } from '../../infra/typeorm/entities/Address';
import { IUpdateAddress } from '../../dtos/IAddressDTO';
import { IAddressesRepository } from '../../repositories/IAddressesRepository';

@injectable()
class UpdateAddressUseCase {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateAddress): Promise<Address> {
    const foundedAddressById = await this.addressesRepository.findById({ id });

    if (!foundedAddressById) {
      throw new AppError('Address not found!', 404);
    }

    await this.addressesRepository.save({ ...foundedAddressById, ...rest });

    const updatedAddress = await this.addressesRepository.findById({ id });

    return updatedAddress;
  }
}

export { UpdateAddressUseCase };
