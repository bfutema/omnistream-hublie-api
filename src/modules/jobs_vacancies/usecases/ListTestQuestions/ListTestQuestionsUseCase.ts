import { injectable, inject } from 'tsyringe';

import { TestQuestion } from '../../infra/typeorm/entities/TestQuestion';
import { IListTestQuestion } from '../../dtos/ITestQuestionDTO';
import { ITestQuestionsRepository } from '../../repositories/ITestQuestionsRepository';

@injectable()
class ListTestQuestionUseCase {
  constructor(
    @inject('TestQuestionsRepository')
    private testQuestionsRepository: ITestQuestionsRepository,
  ) {}

  public async execute(params: IListTestQuestion): Promise<[TestQuestion[], number]> {
    const testQuestions = await this.testQuestionsRepository.find(params);

    return testQuestions;
  }
}

export { ListTestQuestionUseCase };
