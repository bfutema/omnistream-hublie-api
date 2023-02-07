import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { TestQuestion } from '../../infra/typeorm/entities/TestQuestion';
import { IUpdateTestQuestion } from '../../dtos/ITestQuestionDTO';
import { ITestQuestionsRepository } from '../../repositories/ITestQuestionsRepository';

@injectable()
class UpdateTestQuestionUseCase {
  constructor(
    @inject('TestQuestionsRepository')
    private testQuestionsRepository: ITestQuestionsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateTestQuestion): Promise<TestQuestion> {
    const foundedTestQuestionById = await this.testQuestionsRepository.findById({ id });

    if (!foundedTestQuestionById) {
      throw new AppError('TestQuestion not found!', 404);
    }

    await this.testQuestionsRepository.save({ ...foundedTestQuestionById, ...rest });

    const updatedTestQuestion = await this.testQuestionsRepository.findById({ id });

    return updatedTestQuestion;
  }
}

export { UpdateTestQuestionUseCase };
