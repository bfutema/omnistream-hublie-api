import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AccountAvatar } from '../../infra/typeorm/entities/AccountAvatar';
import { IUpdateAccountAvatar } from '../../dtos/IAccountAvatarDTO';
import { IAccountAvatarsRepository } from '../../repositories/IAccountAvatarsRepository';

@injectable()
class UpdateAccountAvatarUseCase {
  constructor(
    @inject('AccountAvatarsRepository')
    private accountAvatarsRepository: IAccountAvatarsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateAccountAvatar): Promise<AccountAvatar> {
    const foundedAccountAvatarById = await this.accountAvatarsRepository.findById({ id });

    if (!foundedAccountAvatarById) {
      throw new AppError('AccountAvatar not found!', 404);
    }

    await this.accountAvatarsRepository.save({ ...foundedAccountAvatarById, ...rest });

    const updatedAccountAvatar = await this.accountAvatarsRepository.findById({ id });

    return updatedAccountAvatar;
  }
}

export { UpdateAccountAvatarUseCase };
