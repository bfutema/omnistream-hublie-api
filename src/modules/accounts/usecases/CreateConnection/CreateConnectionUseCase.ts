import { injectable, inject } from 'tsyringe';

import { Connection } from '../../infra/typeorm/entities/Connection';
import { ICreateConnection } from '../../dtos/IConnectionDTO';
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository';

@injectable()
class CreateConnectionUseCase {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute(data: ICreateConnection): Promise<Connection> {
    const { id } = await this.connectionsRepository.create(data);

    const createdConnection = await this.connectionsRepository.findById({ id });

    return createdConnection;
  }
}

export { CreateConnectionUseCase };
