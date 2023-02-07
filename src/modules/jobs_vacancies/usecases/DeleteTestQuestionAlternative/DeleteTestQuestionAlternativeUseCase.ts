import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteTestQuestionAlternative } from '../../dtos/ITestQuestionAlternativeDTO';
import { ITestQuestionAlternativesRepository } from '../../repositories/ITestQuestionAlternativesRepository';

@injectable()
class DeleteTestQuestionAlternativeUseCase {
  constructor(
    @inject('TestQuestionAlternativesRepository')
    private testQuestionAlternativesRepository: ITestQuestionAlternativesRepository,
  ) {}

  public async execute({ id }: IDeleteTestQuestionAlternative): Promise<void> {
    const foundedTestQuestionAlternative = await this.testQuestionAlternativesRepository.findById({ id });

    if (!foundedTestQuestionAlternative) {
      throw new AppError('TestQuestionAlternative not found!', 404);
    }

    await this.testQuestionAlternativesRepository.delete(id);
  }
}

export { DeleteTestQuestionAlternativeUseCase };
