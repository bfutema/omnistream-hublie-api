import { injectable, inject } from 'tsyringe';

import { Evaluation } from '../../infra/typeorm/entities/Evaluation';
import { ICreateEvaluation } from '../../dtos/IEvaluationDTO';
import { IEvaluationsRepository } from '../../repositories/IEvaluationsRepository';

@injectable()
class CreateEvaluationUseCase {
  constructor(
    @inject('EvaluationsRepository')
    private evaluationsRepository: IEvaluationsRepository,
  ) {}

  public async execute(data: ICreateEvaluation): Promise<Evaluation> {
    const { id } = await this.evaluationsRepository.create(data);

    const createdEvaluation = await this.evaluationsRepository.findById({ id });

    return createdEvaluation;
  }
}

export { CreateEvaluationUseCase };
