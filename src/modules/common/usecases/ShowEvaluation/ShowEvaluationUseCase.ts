import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Evaluation } from '../../infra/typeorm/entities/Evaluation';
import { IShowEvaluation } from '../../dtos/IEvaluationDTO';
import { IEvaluationsRepository } from '../../repositories/IEvaluationsRepository';

@injectable()
class ShowEvaluationUseCase {
  constructor(
    @inject('EvaluationsRepository')
    private evaluationsRepository: IEvaluationsRepository,
  ) {}

  public async execute({ id }: IShowEvaluation): Promise<Evaluation> {
    const evaluation = await this.evaluationsRepository.findById({ id });

    if (!evaluation) {
      throw new AppError('Evaluation not found!', 404);
    }

    return evaluation;
  }
}

export { ShowEvaluationUseCase };
