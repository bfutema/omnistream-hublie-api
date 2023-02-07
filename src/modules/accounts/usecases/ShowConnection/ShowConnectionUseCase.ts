import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Connection } from '../../infra/typeorm/entities/Connection';
import { IShowConnection } from '../../dtos/IConnectionDTO';
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository';

@injectable()
class ShowConnectionUseCase {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute({ id }: IShowConnection): Promise<Connection> {
    const connection = await this.connectionsRepository.findById({ id });

    if (!connection) {
      throw new AppError('Connection not found!', 404);
    }

    return connection;
  }
}

export { ShowConnectionUseCase };
