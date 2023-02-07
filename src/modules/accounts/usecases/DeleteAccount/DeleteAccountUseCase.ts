import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteAccount } from '../../dtos/IAccountDTO';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';

@injectable()
class DeleteAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute({ id }: IDeleteAccount): Promise<void> {
    const foundedAccount = await this.accountsRepository.findById({ id });

    if (!foundedAccount) {
      throw new AppError('Account not found!', 404);
    }

    await this.accountsRepository.delete(id);
  }
}

export { DeleteAccountUseCase };
