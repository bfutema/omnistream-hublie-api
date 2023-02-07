import { injectable, inject } from 'tsyringe';

import { TestQuestionAlternative } from '../../infra/typeorm/entities/TestQuestionAlternative';
import { ICreateTestQuestionAlternative } from '../../dtos/ITestQuestionAlternativeDTO';
import { ITestQuestionAlternativesRepository } from '../../repositories/ITestQuestionAlternativesRepository';

@injectable()
class CreateTestQuestionAlternativeUseCase {
  constructor(
    @inject('TestQuestionAlternativesRepository')
    private testQuestionAlternativesRepository: ITestQuestionAlternativesRepository,
  ) {}

  public async execute(data: ICreateTestQuestionAlternative): Promise<TestQuestionAlternative> {
    const { id } = await this.testQuestionAlternativesRepository.create(data);

    const createdTestQuestionAlternative = await this.testQuestionAlternativesRepository.findById({ id });

    return createdTestQuestionAlternative;
  }
}

export { CreateTestQuestionAlternativeUseCase };
