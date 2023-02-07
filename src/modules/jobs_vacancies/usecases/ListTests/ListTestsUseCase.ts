import { injectable, inject } from 'tsyringe';

import { Test } from '../../infra/typeorm/entities/Test';
import { IListTest } from '../../dtos/ITestDTO';
import { ITestsRepository } from '../../repositories/ITestsRepository';

@injectable()
class ListTestUseCase {
  constructor(
    @inject('TestsRepository')
    private testsRepository: ITestsRepository,
  ) {}

  public async execute(params: IListTest): Promise<[Test[], number]> {
    const tests = await this.testsRepository.find(params);

    return tests;
  }
}

export { ListTestUseCase };
