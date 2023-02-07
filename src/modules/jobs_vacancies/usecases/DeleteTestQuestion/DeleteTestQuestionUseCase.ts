import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteTestQuestion } from '../../dtos/ITestQuestionDTO';
import { ITestQuestionsRepository } from '../../repositories/ITestQuestionsRepository';

@injectable()
class DeleteTestQuestionUseCase {
  constructor(
    @inject('TestQuestionsRepository')
    private testQuestionsRepository: ITestQuestionsRepository,
  ) {}

  public async execute({ id }: IDeleteTestQuestion): Promise<void> {
    const foundedTestQuestion = await this.testQuestionsRepository.findById({ id });

    if (!foundedTestQuestion) {
      throw new AppError('TestQuestion not found!', 404);
    }

    await this.testQuestionsRepository.delete(id);
  }
}

export { DeleteTestQuestionUseCase };
