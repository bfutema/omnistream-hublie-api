import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Account } from '../../infra/typeorm/entities/Account';
import { IUpdateAccount } from '../../dtos/IAccountDTO';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';

@injectable()
class UpdateAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateAccount): Promise<Account> {
    const foundedAccountById = await this.accountsRepository.findById({ id });

    if (!foundedAccountById) {
      throw new AppError('Account not found!', 404);
    }

    await this.accountsRepository.save({ ...foundedAccountById, ...rest });

    const updatedAccount = await this.accountsRepository.findById({ id });

    return updatedAccount;
  }
}

export { UpdateAccountUseCase };
