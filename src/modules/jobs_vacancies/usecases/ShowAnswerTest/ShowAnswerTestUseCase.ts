import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AnswerTest } from '../../infra/typeorm/entities/AnswerTest';
import { IShowAnswerTest } from '../../dtos/IAnswerTestDTO';
import { IAnswerTestsRepository } from '../../repositories/IAnswerTestsRepository';

@injectable()
class ShowAnswerTestUseCase {
  constructor(
    @inject('AnswerTestsRepository')
    private answerTestsRepository: IAnswerTestsRepository,
  ) {}

  public async execute({ id }: IShowAnswerTest): Promise<AnswerTest> {
    const answerTest = await this.answerTestsRepository.findById({ id });

    if (!answerTest) {
      throw new AppError('AnswerTest not found!', 404);
    }

    return answerTest;
  }
}

export { ShowAnswerTestUseCase };
