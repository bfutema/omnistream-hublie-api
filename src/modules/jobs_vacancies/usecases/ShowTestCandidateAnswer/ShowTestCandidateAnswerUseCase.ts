import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { TestCandidateAnswer } from '../../infra/typeorm/entities/TestCandidateAnswer';
import { IShowTestCandidateAnswer } from '../../dtos/ITestCandidateAnswerDTO';
import { ITestCandidateAnswersRepository } from '../../repositories/ITestCandidateAnswersRepository';

@injectable()
class ShowTestCandidateAnswerUseCase {
  constructor(
    @inject('TestCandidateAnswersRepository')
    private testCandidateAnswersRepository: ITestCandidateAnswersRepository,
  ) {}

  public async execute({ id }: IShowTestCandidateAnswer): Promise<TestCandidateAnswer> {
    const testCandidateAnswer = await this.testCandidateAnswersRepository.findById({ id });

    if (!testCandidateAnswer) {
      throw new AppError('TestCandidateAnswer not found!', 404);
    }

    return testCandidateAnswer;
  }
}

export { ShowTestCandidateAnswerUseCase };
