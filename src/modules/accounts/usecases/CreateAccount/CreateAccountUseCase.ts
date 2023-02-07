import { injectable, inject } from 'tsyringe';

import { Account } from '../../infra/typeorm/entities/Account';
import { ICreateAccount } from '../../dtos/IAccountDTO';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute(data: ICreateAccount): Promise<Account> {
    const { id } = await this.accountsRepository.create(data);

    const createdAccount = await this.accountsRepository.findById({ id });

    return createdAccount;
  }
}

export { CreateAccountUseCase };
