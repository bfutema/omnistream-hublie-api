import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { TestCandidateAnswer } from '../../infra/typeorm/entities/TestCandidateAnswer';
import { IUpdateTestCandidateAnswer } from '../../dtos/ITestCandidateAnswerDTO';
import { ITestCandidateAnswersRepository } from '../../repositories/ITestCandidateAnswersRepository';

@injectable()
class UpdateTestCandidateAnswerUseCase {
  constructor(
    @inject('TestCandidateAnswersRepository')
    private testCandidateAnswersRepository: ITestCandidateAnswersRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateTestCandidateAnswer): Promise<TestCandidateAnswer> {
    const foundedTestCandidateAnswerById = await this.testCandidateAnswersRepository.findById({ id });

    if (!foundedTestCandidateAnswerById) {
      throw new AppError('TestCandidateAnswer not found!', 404);
    }

    await this.testCandidateAnswersRepository.save({ ...foundedTestCandidateAnswerById, ...rest });

    const updatedTestCandidateAnswer = await this.testCandidateAnswersRepository.findById({ id });

    return updatedTestCandidateAnswer;
  }
}

export { UpdateTestCandidateAnswerUseCase };
