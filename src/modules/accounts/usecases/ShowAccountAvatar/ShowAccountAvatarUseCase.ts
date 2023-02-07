import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AccountAvatar } from '../../infra/typeorm/entities/AccountAvatar';
import { IShowAccountAvatar } from '../../dtos/IAccountAvatarDTO';
import { IAccountAvatarsRepository } from '../../repositories/IAccountAvatarsRepository';

@injectable()
class ShowAccountAvatarUseCase {
  constructor(
    @inject('AccountAvatarsRepository')
    private accountAvatarsRepository: IAccountAvatarsRepository,
  ) {}

  public async execute({ id }: IShowAccountAvatar): Promise<AccountAvatar> {
    const accountAvatar = await this.accountAvatarsRepository.findById({ id });

    if (!accountAvatar) {
      throw new AppError('AccountAvatar not found!', 404);
    }

    return accountAvatar;
  }
}

export { ShowAccountAvatarUseCase };
