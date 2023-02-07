import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Test } from '../../infra/typeorm/entities/Test';
import { IShowTest } from '../../dtos/ITestDTO';
import { ITestsRepository } from '../../repositories/ITestsRepository';

@injectable()
class ShowTestUseCase {
  constructor(
    @inject('TestsRepository')
    private testsRepository: ITestsRepository,
  ) {}

  public async execute({ id }: IShowTest): Promise<Test> {
    const test = await this.testsRepository.findById({ id });

    if (!test) {
      throw new AppError('Test not found!', 404);
    }

    return test;
  }
}

export { ShowTestUseCase };
