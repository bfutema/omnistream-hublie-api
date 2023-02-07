import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { TestQuestionAlternative } from '../../infra/typeorm/entities/TestQuestionAlternative';
import { IShowTestQuestionAlternative } from '../../dtos/ITestQuestionAlternativeDTO';
import { ITestQuestionAlternativesRepository } from '../../repositories/ITestQuestionAlternativesRepository';

@injectable()
class ShowTestQuestionAlternativeUseCase {
  constructor(
    @inject('TestQuestionAlternativesRepository')
    private testQuestionAlternativesRepository: ITestQuestionAlternativesRepository,
  ) {}

  public async execute({ id }: IShowTestQuestionAlternative): Promise<TestQuestionAlternative> {
    const testQuestionAlternative = await this.testQuestionAlternativesRepository.findById({ id });

    if (!testQuestionAlternative) {
      throw new AppError('TestQuestionAlternative not found!', 404);
    }

    return testQuestionAlternative;
  }
}

export { ShowTestQuestionAlternativeUseCase };
