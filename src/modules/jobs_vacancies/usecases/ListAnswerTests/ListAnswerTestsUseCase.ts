import { injectable, inject } from 'tsyringe';

import { AnswerTest } from '../../infra/typeorm/entities/AnswerTest';
import { IListAnswerTest } from '../../dtos/IAnswerTestDTO';
import { IAnswerTestsRepository } from '../../repositories/IAnswerTestsRepository';

@injectable()
class ListAnswerTestUseCase {
  constructor(
    @inject('AnswerTestsRepository')
    private answerTestsRepository: IAnswerTestsRepository,
  ) {}

  public async execute(params: IListAnswerTest): Promise<[AnswerTest[], number]> {
    const answerTests = await this.answerTestsRepository.find(params);

    return answerTests;
  }
}

export { ListAnswerTestUseCase };
