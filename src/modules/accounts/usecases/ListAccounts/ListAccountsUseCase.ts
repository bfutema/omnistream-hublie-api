import { injectable, inject } from 'tsyringe';

import { Account } from '../../infra/typeorm/entities/Account';
import { IListAccount } from '../../dtos/IAccountDTO';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';

@injectable()
class ListAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute(params: IListAccount): Promise<[Account[], number]> {
    const accounts = await this.accountsRepository.find(params);

    return accounts;
  }
}

export { ListAccountUseCase };
