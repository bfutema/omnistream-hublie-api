import { injectable, inject } from 'tsyringe';

import { TestCandidateAnswer } from '../../infra/typeorm/entities/TestCandidateAnswer';
import { ICreateTestCandidateAnswer } from '../../dtos/ITestCandidateAnswerDTO';
import { ITestCandidateAnswersRepository } from '../../repositories/ITestCandidateAnswersRepository';

@injectable()
class CreateTestCandidateAnswerUseCase {
  constructor(
    @inject('TestCandidateAnswersRepository')
    private testCandidateAnswersRepository: ITestCandidateAnswersRepository,
  ) {}

  public async execute(data: ICreateTestCandidateAnswer): Promise<TestCandidateAnswer> {
    const { id } = await this.testCandidateAnswersRepository.create(data);

    const createdTestCandidateAnswer = await this.testCandidateAnswersRepository.findById({ id });

    return createdTestCandidateAnswer;
  }
}

export { CreateTestCandidateAnswerUseCase };
