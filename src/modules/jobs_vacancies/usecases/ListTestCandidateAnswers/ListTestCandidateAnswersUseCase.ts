import { injectable, inject } from 'tsyringe';

import { TestCandidateAnswer } from '../../infra/typeorm/entities/TestCandidateAnswer';
import { IListTestCandidateAnswer } from '../../dtos/ITestCandidateAnswerDTO';
import { ITestCandidateAnswersRepository } from '../../repositories/ITestCandidateAnswersRepository';

@injectable()
class ListTestCandidateAnswerUseCase {
  constructor(
    @inject('TestCandidateAnswersRepository')
    private testCandidateAnswersRepository: ITestCandidateAnswersRepository,
  ) {}

  public async execute(params: IListTestCandidateAnswer): Promise<[TestCandidateAnswer[], number]> {
    const testCandidateAnswers = await this.testCandidateAnswersRepository.find(params);

    return testCandidateAnswers;
  }
}

export { ListTestCandidateAnswerUseCase };
