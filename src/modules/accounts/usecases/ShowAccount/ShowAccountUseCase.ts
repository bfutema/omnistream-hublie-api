import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Account } from '../../infra/typeorm/entities/Account';
import { IShowAccount } from '../../dtos/IAccountDTO';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';

@injectable()
class ShowAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute({ id }: IShowAccount): Promise<Account> {
    const account = await this.accountsRepository.findById({ id });

    if (!account) {
      throw new AppError('Account not found!', 404);
    }

    return account;
  }
}

export { ShowAccountUseCase };
