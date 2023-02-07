import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteConnection } from '../../dtos/IConnectionDTO';
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository';

@injectable()
class DeleteConnectionUseCase {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute({ id }: IDeleteConnection): Promise<void> {
    const foundedConnection = await this.connectionsRepository.findById({ id });

    if (!foundedConnection) {
      throw new AppError('Connection not found!', 404);
    }

    await this.connectionsRepository.delete(id);
  }
}

export { DeleteConnectionUseCase };
