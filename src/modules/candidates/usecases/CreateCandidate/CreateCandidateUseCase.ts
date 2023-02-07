import { injectable, inject } from 'tsyringe';

import { Candidate } from '../../infra/typeorm/entities/Candidate';
import { ICreateCandidate } from '../../dtos/ICandidateDTO';
import { ICandidatesRepository } from '../../repositories/ICandidatesRepository';

@injectable()
class CreateCandidateUseCase {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute(data: ICreateCandidate): Promise<Candidate> {
    const { id } = await this.candidatesRepository.create(data);

    const createdCandidate = await this.candidatesRepository.findById({ id });

    return createdCandidate;
  }
}

export { CreateCandidateUseCase };
