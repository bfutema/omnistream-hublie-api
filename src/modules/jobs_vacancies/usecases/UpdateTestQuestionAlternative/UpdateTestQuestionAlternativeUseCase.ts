import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { TestQuestionAlternative } from '../../infra/typeorm/entities/TestQuestionAlternative';
import { IUpdateTestQuestionAlternative } from '../../dtos/ITestQuestionAlternativeDTO';
import { ITestQuestionAlternativesRepository } from '../../repositories/ITestQuestionAlternativesRepository';

@injectable()
class UpdateTestQuestionAlternativeUseCase {
  constructor(
    @inject('TestQuestionAlternativesRepository')
    private testQuestionAlternativesRepository: ITestQuestionAlternativesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateTestQuestionAlternative): Promise<TestQuestionAlternative> {
    const foundedTestQuestionAlternativeById = await this.testQuestionAlternativesRepository.findById({ id });

    if (!foundedTestQuestionAlternativeById) {
      throw new AppError('TestQuestionAlternative not found!', 404);
    }

    await this.testQuestionAlternativesRepository.save({ ...foundedTestQuestionAlternativeById, ...rest });

    const updatedTestQuestionAlternative = await this.testQuestionAlternativesRepository.findById({ id });

    return updatedTestQuestionAlternative;
  }
}

export { UpdateTestQuestionAlternativeUseCase };
