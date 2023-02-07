import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { TestQuestion } from '../../infra/typeorm/entities/TestQuestion';
import { IShowTestQuestion } from '../../dtos/ITestQuestionDTO';
import { ITestQuestionsRepository } from '../../repositories/ITestQuestionsRepository';

@injectable()
class ShowTestQuestionUseCase {
  constructor(
    @inject('TestQuestionsRepository')
    private testQuestionsRepository: ITestQuestionsRepository,
  ) {}

  public async execute({ id }: IShowTestQuestion): Promise<TestQuestion> {
    const testQuestion = await this.testQuestionsRepository.findById({ id });

    if (!testQuestion) {
      throw new AppError('TestQuestion not found!', 404);
    }

    return testQuestion;
  }
}

export { ShowTestQuestionUseCase };
