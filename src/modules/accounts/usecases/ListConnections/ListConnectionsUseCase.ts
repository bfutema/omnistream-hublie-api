import { injectable, inject } from 'tsyringe';

import { Connection } from '../../infra/typeorm/entities/Connection';
import { IListConnection } from '../../dtos/IConnectionDTO';
import { IConnectionsRepository } from '../../repositories/IConnectionsRepository';

@injectable()
class ListConnectionUseCase {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute(params: IListConnection): Promise<[Connection[], number]> {
    const connections = await this.connectionsRepository.find(params);

    return connections;
  }
}

export { ListConnectionUseCase };
