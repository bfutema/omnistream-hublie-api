import { injectable, inject } from 'tsyringe';

import { Candidate } from '../../infra/typeorm/entities/Candidate';
import { IListCandidate } from '../../dtos/ICandidateDTO';
import { ICandidatesRepository } from '../../repositories/ICandidatesRepository';

@injectable()
class ListCandidateUseCase {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute(params: IListCandidate): Promise<[Candidate[], number]> {
    const candidates = await this.candidatesRepository.find(params);

    return candidates;
  }
}

export { ListCandidateUseCase };
