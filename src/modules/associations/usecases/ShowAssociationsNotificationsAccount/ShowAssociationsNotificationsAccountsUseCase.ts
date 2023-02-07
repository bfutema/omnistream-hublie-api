import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AssociationsNotificationsAccounts } from '../../infra/typeorm/entities/AssociationsNotificationsAccounts';
import { IShowAssociationsNotificationsAccounts } from '../../dtos/IAssociationsNotificationsAccountsDTO';
import { IAssociationsNotificationsAccountsRepository } from '../../repositories/IAssociationsNotificationsAccountsRepository';

@injectable()
class ShowAssociationsNotificationsAccountsUseCase {
  constructor(
    @inject('AssociationsNotificationsAccountsRepository')
    private associationsNotificationsAccountsRepository: IAssociationsNotificationsAccountsRepository,
  ) {}

  public async execute({ id }: IShowAssociationsNotificationsAccounts): Promise<AssociationsNotificationsAccounts> {
    const associationsNotificationsAccounts = await this.associationsNotificationsAccountsRepository.findById({ id });

    if (!associationsNotificationsAccounts) {
      throw new AppError('AssociationsNotificationsAccounts not found!', 404);
    }

    return associationsNotificationsAccounts;
  }
}

export { ShowAssociationsNotificationsAccountsUseCase };
