import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteAddress } from '../../dtos/IAddressDTO';
import { IAddressesRepository } from '../../repositories/IAddressesRepository';

@injectable()
class DeleteAddressUseCase {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
  ) {}

  public async execute({ id }: IDeleteAddress): Promise<void> {
    const foundedAddress = await this.addressesRepository.findById({ id });

    if (!foundedAddress) {
      throw new AppError('Address not found!', 404);
    }

    await this.addressesRepository.delete(id);
  }
}

export { DeleteAddressUseCase };
