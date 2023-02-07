import { injectable, inject } from 'tsyringe';

import { AssociationsNotificationsAccounts } from '../../infra/typeorm/entities/AssociationsNotificationsAccounts';
import { ICreateAssociationsNotificationsAccounts } from '../../dtos/IAssociationsNotificationsAccountsDTO';
import { IAssociationsNotificationsAccountsRepository } from '../../repositories/IAssociationsNotificationsAccountsRepository';

@injectable()
class CreateAssociationsNotificationsAccountsUseCase {
  constructor(
    @inject('AssociationsNotificationsAccountsRepository')
    private associationsNotificationsAccountsRepository: IAssociationsNotificationsAccountsRepository,
  ) {}

  public async execute(data: ICreateAssociationsNotificationsAccounts): Promise<AssociationsNotificationsAccounts> {
    const { id } = await this.associationsNotificationsAccountsRepository.create(data);

    const createdAssociationsNotificationsAccounts = await this.associationsNotificationsAccountsRepository.findById({ id });

    return createdAssociationsNotificationsAccounts;
  }
}

export { CreateAssociationsNotificationsAccountsUseCase };
