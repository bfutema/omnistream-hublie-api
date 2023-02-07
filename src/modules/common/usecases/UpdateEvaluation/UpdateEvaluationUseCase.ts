import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Evaluation } from '../../infra/typeorm/entities/Evaluation';
import { IUpdateEvaluation } from '../../dtos/IEvaluationDTO';
import { IEvaluationsRepository } from '../../repositories/IEvaluationsRepository';

@injectable()
class UpdateEvaluationUseCase {
  constructor(
    @inject('EvaluationsRepository')
    private evaluationsRepository: IEvaluationsRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateEvaluation): Promise<Evaluation> {
    const foundedEvaluationById = await this.evaluationsRepository.findById({ id });

    if (!foundedEvaluationById) {
      throw new AppError('Evaluation not found!', 404);
    }

    await this.evaluationsRepository.save({ ...foundedEvaluationById, ...rest });

    const updatedEvaluation = await this.evaluationsRepository.findById({ id });

    return updatedEvaluation;
  }
}

export { UpdateEvaluationUseCase };
