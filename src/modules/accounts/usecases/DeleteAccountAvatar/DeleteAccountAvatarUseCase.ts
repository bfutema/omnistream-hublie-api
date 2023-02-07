import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteAccountAvatar } from '../../dtos/IAccountAvatarDTO';
import { IAccountAvatarsRepository } from '../../repositories/IAccountAvatarsRepository';

@injectable()
class DeleteAccountAvatarUseCase {
  constructor(
    @inject('AccountAvatarsRepository')
    private accountAvatarsRepository: IAccountAvatarsRepository,
  ) {}

  public async execute({ id }: IDeleteAccountAvatar): Promise<void> {
    const foundedAccountAvatar = await this.accountAvatarsRepository.findById({ id });

    if (!foundedAccountAvatar) {
      throw new AppError('AccountAvatar not found!', 404);
    }

    await this.accountAvatarsRepository.delete(id);
  }
}

export { DeleteAccountAvatarUseCase };
