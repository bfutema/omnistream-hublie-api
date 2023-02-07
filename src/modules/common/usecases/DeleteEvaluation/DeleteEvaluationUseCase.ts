import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteEvaluation } from '../../dtos/IEvaluationDTO';
import { IEvaluationsRepository } from '../../repositories/IEvaluationsRepository';

@injectable()
class DeleteEvaluationUseCase {
  constructor(
    @inject('EvaluationsRepository')
    private evaluationsRepository: IEvaluationsRepository,
  ) {}

  public async execute({ id }: IDeleteEvaluation): Promise<void> {
    const foundedEvaluation = await this.evaluationsRepository.findById({ id });

    if (!foundedEvaluation) {
      throw new AppError('Evaluation not found!', 404);
    }

    await this.evaluationsRepository.delete(id);
  }
}

export { DeleteEvaluationUseCase };
