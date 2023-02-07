import { injectable, inject } from 'tsyringe';

import { AccountAvatar } from '../../infra/typeorm/entities/AccountAvatar';
import { ICreateAccountAvatar } from '../../dtos/IAccountAvatarDTO';
import { IAccountAvatarsRepository } from '../../repositories/IAccountAvatarsRepository';

@injectable()
class CreateAccountAvatarUseCase {
  constructor(
    @inject('AccountAvatarsRepository')
    private accountAvatarsRepository: IAccountAvatarsRepository,
  ) {}

  public async execute(data: ICreateAccountAvatar): Promise<AccountAvatar> {
    const { id } = await this.accountAvatarsRepository.create(data);

    const createdAccountAvatar = await this.accountAvatarsRepository.findById({ id });

    return createdAccountAvatar;
  }
}

export { CreateAccountAvatarUseCase };
