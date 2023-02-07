import { injectable, inject } from 'tsyringe';

import { TestQuestion } from '../../infra/typeorm/entities/TestQuestion';
import { ICreateTestQuestion } from '../../dtos/ITestQuestionDTO';
import { ITestQuestionsRepository } from '../../repositories/ITestQuestionsRepository';

@injectable()
class CreateTestQuestionUseCase {
  constructor(
    @inject('TestQuestionsRepository')
    private testQuestionsRepository: ITestQuestionsRepository,
  ) {}

  public async execute(data: ICreateTestQuestion): Promise<TestQuestion> {
    const { id } = await this.testQuestionsRepository.create(data);

    const createdTestQuestion = await this.testQuestionsRepository.findById({ id });

    return createdTestQuestion;
  }
}

export { CreateTestQuestionUseCase };
