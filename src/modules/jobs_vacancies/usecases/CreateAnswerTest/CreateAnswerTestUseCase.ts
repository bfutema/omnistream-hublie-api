import { injectable, inject } from 'tsyringe';

import { AnswerTest } from '../../infra/typeorm/entities/AnswerTest';
import { ICreateAnswerTest } from '../../dtos/IAnswerTestDTO';
import { IAnswerTestsRepository } from '../../repositories/IAnswerTestsRepository';

@injectable()
class CreateAnswerTestUseCase {
  constructor(
    @inject('AnswerTestsRepository')
    private answerTestsRepository: IAnswerTestsRepository,
  ) {}

  public async execute(data: ICreateAnswerTest): Promise<AnswerTest> {
    const { id } = await this.answerTestsRepository.create(data);

    const createdAnswerTest = await this.answerTestsRepository.findById({ id });

    return createdAnswerTest;
  }
}

export { CreateAnswerTestUseCase };
