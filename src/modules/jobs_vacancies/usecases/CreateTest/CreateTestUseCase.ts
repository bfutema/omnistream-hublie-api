import { injectable, inject } from 'tsyringe';

import { Test } from '../../infra/typeorm/entities/Test';
import { ICreateTest } from '../../dtos/ITestDTO';
import { ITestsRepository } from '../../repositories/ITestsRepository';

@injectable()
class CreateTestUseCase {
  constructor(
    @inject('TestsRepository')
    private testsRepository: ITestsRepository,
  ) {}

  public async execute(data: ICreateTest): Promise<Test> {
    const { id } = await this.testsRepository.create(data);

    const createdTest = await this.testsRepository.findById({ id });

    return createdTest;
  }
}

export { CreateTestUseCase };
