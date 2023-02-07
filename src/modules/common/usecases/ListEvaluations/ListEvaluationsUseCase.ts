import { injectable, inject } from 'tsyringe';

import { Evaluation } from '../../infra/typeorm/entities/Evaluation';
import { IListEvaluation } from '../../dtos/IEvaluationDTO';
import { IEvaluationsRepository } from '../../repositories/IEvaluationsRepository';

@injectable()
class ListEvaluationUseCase {
  constructor(
    @inject('EvaluationsRepository')
    private evaluationsRepository: IEvaluationsRepository,
  ) {}

  public async execute(params: IListEvaluation): Promise<[Evaluation[], number]> {
    const evaluations = await this.evaluationsRepository.find(params);

    return evaluations;
  }
}

export { ListEvaluationUseCase };
