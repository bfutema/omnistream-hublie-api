import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AssociationsNotificationsAccounts } from '../../infra/typeorm/entities/AssociationsNotificationsAccounts';
import { IUpdateAssociationsNotificationsAccounts } from '../../dtos/IAssociationsNotificationsAccountsDTO';
import { IAssociationsNotificationsAccountsRepository } from '../../repositories/IAssociationsNotificationsAccountsRepository';

@injectable()
class UpdateAssociationsNotificationsAccountsUseCase {
  constructor(
    @inject('AssociationsNotificationsAccountsRepository')
    private associationsNotificationsAccountsRepository: IAssociationsNotificationsAccountsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateAssociationsNotificationsAccounts): Promise<AssociationsNotificationsAccounts> {
    const foundedAssociationsNotificationsAccountsById = await this.associationsNotificationsAccountsRepository.findById({ id });

    if (!foundedAssociationsNotificationsAccountsById) {
      throw new AppError('AssociationsNotificationsAccounts not found!', 404);
    }

    await this.associationsNotificationsAccountsRepository.save({ ...foundedAssociationsNotificationsAccountsById, ...rest });

    const updatedAssociationsNotificationsAccounts = await this.associationsNotificationsAccountsRepository.findById({ id });

    return updatedAssociationsNotificationsAccounts;
  }
}

export { UpdateAssociationsNotificationsAccountsUseCase };
