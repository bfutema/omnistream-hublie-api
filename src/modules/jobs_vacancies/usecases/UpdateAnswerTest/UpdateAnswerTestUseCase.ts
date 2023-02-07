import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { AnswerTest } from '../../infra/typeorm/entities/AnswerTest';
import { IUpdateAnswerTest } from '../../dtos/IAnswerTestDTO';
import { IAnswerTestsRepository } from '../../repositories/IAnswerTestsRepository';

@injectable()
class UpdateAnswerTestUseCase {
  constructor(
    @inject('AnswerTestsRepository')
    private answerTestsRepository: IAnswerTestsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateAnswerTest): Promise<AnswerTest> {
    const foundedAnswerTestById = await this.answerTestsRepository.findById({ id });

    if (!foundedAnswerTestById) {
      throw new AppError('AnswerTest not found!', 404);
    }

    await this.answerTestsRepository.save({ ...foundedAnswerTestById, ...rest });

    const updatedAnswerTest = await this.answerTestsRepository.findById({ id });

    return updatedAnswerTest;
  }
}

export { UpdateAnswerTestUseCase };
