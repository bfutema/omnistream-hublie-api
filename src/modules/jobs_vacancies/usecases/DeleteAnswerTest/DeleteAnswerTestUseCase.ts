import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteAnswerTest } from '../../dtos/IAnswerTestDTO';
import { IAnswerTestsRepository } from '../../repositories/IAnswerTestsRepository';

@injectable()
class DeleteAnswerTestUseCase {
  constructor(
    @inject('AnswerTestsRepository')
    private answerTestsRepository: IAnswerTestsRepository,
  ) {}

  public async execute({ id }: IDeleteAnswerTest): Promise<void> {
    const foundedAnswerTest = await this.answerTestsRepository.findById({ id });

    if (!foundedAnswerTest) {
      throw new AppError('AnswerTest not found!', 404);
    }

    await this.answerTestsRepository.delete(id);
  }
}

export { DeleteAnswerTestUseCase };
