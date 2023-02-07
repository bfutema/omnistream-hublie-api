import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteTest } from '../../dtos/ITestDTO';
import { ITestsRepository } from '../../repositories/ITestsRepository';

@injectable()
class DeleteTestUseCase {
  constructor(
    @inject('TestsRepository')
    private testsRepository: ITestsRepository,
  ) {}

  public async execute({ id }: IDeleteTest): Promise<void> {
    const foundedTest = await this.testsRepository.findById({ id });

    if (!foundedTest) {
      throw new AppError('Test not found!', 404);
    }

    await this.testsRepository.delete(id);
  }
}

export { DeleteTestUseCase };
