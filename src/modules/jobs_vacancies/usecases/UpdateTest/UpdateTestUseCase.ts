import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Test } from '../../infra/typeorm/entities/Test';
import { IUpdateTest } from '../../dtos/ITestDTO';
import { ITestsRepository } from '../../repositories/ITestsRepository';

@injectable()
class UpdateTestUseCase {
  constructor(
    @inject('TestsRepository')
    private testsRepository: ITestsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateTest): Promise<Test> {
    const foundedTestById = await this.testsRepository.findById({ id });

    if (!foundedTestById) {
      throw new AppError('Test not found!', 404);
    }

    await this.testsRepository.save({ ...foundedTestById, ...rest });

    const updatedTest = await this.testsRepository.findById({ id });

    return updatedTest;
  }
}

export { UpdateTestUseCase };
