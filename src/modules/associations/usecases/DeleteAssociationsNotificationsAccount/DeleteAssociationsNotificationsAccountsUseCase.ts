import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteAssociationsNotificationsAccounts } from '../../dtos/IAssociationsNotificationsAccountsDTO';
import { IAssociationsNotificationsAccountsRepository } from '../../repositories/IAssociationsNotificationsAccountsRepository';

@injectable()
class DeleteAssociationsNotificationsAccountsUseCase {
  constructor(
    @inject('AssociationsNotificationsAccountsRepository')
    private associationsNotificationsAccountsRepository: IAssociationsNotificationsAccountsRepository,
  ) {}

  public async execute({ id }: IDeleteAssociationsNotificationsAccounts): Promise<void> {
    const foundedAssociationsNotificationsAccounts = await this.associationsNotificationsAccountsRepository.findById({ id });

    if (!foundedAssociationsNotificationsAccounts) {
      throw new AppError('AssociationsNotificationsAccounts not found!', 404);
    }

    await this.associationsNotificationsAccountsRepository.delete(id);
  }
}

export { DeleteAssociationsNotificationsAccountsUseCase };
