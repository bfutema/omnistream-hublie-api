import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Connection } from '../../infra/typeorm/entities/Connection';
import { IUpdateConnection } from '../../dtos/IConnectionDTO';
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository';

@injectable()
class UpdateConnectionUseCase {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateConnection): Promise<Connection> {
    const foundedConnectionById = await this.connectionsRepository.findById({ id });

    if (!foundedConnectionById) {
      throw new AppError('Connection not found!', 404);
    }

    await this.connectionsRepository.save({ ...foundedConnectionById, ...rest });

    const updatedConnection = await this.connectionsRepository.findById({ id });

    return updatedConnection;
  }
}

export { UpdateConnectionUseCase };
