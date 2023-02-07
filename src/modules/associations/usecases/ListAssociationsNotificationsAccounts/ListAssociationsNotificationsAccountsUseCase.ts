import { injectable, inject } from 'tsyringe';

import { AssociationsNotificationsAccounts } from '../../infra/typeorm/entities/AssociationsNotificationsAccounts';
import { IListAssociationsNotificationsAccounts } from '../../dtos/IAssociationsNotificationsAccountsDTO';
import { IAssociationsNotificationsAccountsRepository } from '../../repositories/IAssociationsNotificationsAccountsRepository';

@injectable()
class ListAssociationsNotificationsAccountsUseCase {
  constructor(
    @inject('AssociationsNotificationsAccountsRepository')
    private associationsNotificationsAccountsRepository: IAssociationsNotificationsAccountsRepository,
  ) {}

  public async execute(params: IListAssociationsNotificationsAccounts): Promise<[AssociationsNotificationsAccounts[], number]> {
    const associationsNotificationsAccounts = await this.associationsNotificationsAccountsRepository.find(params);

    return associationsNotificationsAccounts;
  }
}

export { ListAssociationsNotificationsAccountsUseCase };
