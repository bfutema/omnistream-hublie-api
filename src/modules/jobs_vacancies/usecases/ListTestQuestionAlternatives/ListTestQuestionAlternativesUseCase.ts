import { injectable, inject } from 'tsyringe';

import { TestQuestionAlternative } from '../../infra/typeorm/entities/TestQuestionAlternative';
import { IListTestQuestionAlternative } from '../../dtos/ITestQuestionAlternativeDTO';
import { ITestQuestionAlternativesRepository } from '../../repositories/ITestQuestionAlternativesRepository';

@injectable()
class ListTestQuestionAlternativeUseCase {
  constructor(
    @inject('TestQuestionAlternativesRepository')
    private testQuestionAlternativesRepository: ITestQuestionAlternativesRepository,
  ) {}

  public async execute(params: IListTestQuestionAlternative): Promise<[TestQuestionAlternative[], number]> {
    const testQuestionAlternatives = await this.testQuestionAlternativesRepository.find(params);

    return testQuestionAlternatives;
  }
}

export { ListTestQuestionAlternativeUseCase };
