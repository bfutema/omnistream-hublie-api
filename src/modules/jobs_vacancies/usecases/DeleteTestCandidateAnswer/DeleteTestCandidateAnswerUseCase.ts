import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteTestCandidateAnswer } from '../../dtos/ITestCandidateAnswerDTO';
import { ITestCandidateAnswersRepository } from '../../repositories/ITestCandidateAnswersRepository';

@injectable()
class DeleteTestCandidateAnswerUseCase {
  constructor(
    @inject('TestCandidateAnswersRepository')
    private testCandidateAnswersRepository: ITestCandidateAnswersRepository,
  ) {}

  public async execute({ id }: IDeleteTestCandidateAnswer): Promise<void> {
    const foundedTestCandidateAnswer = await this.testCandidateAnswersRepository.findById({ id });

    if (!foundedTestCandidateAnswer) {
      throw new AppError('TestCandidateAnswer not found!', 404);
    }

    await this.testCandidateAnswersRepository.delete(id);
  }
}

export { DeleteTestCandidateAnswerUseCase };
