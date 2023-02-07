import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Candidate } from '../../infra/typeorm/entities/Candidate';
import { IShowCandidate } from '../../dtos/ICandidateDTO';
import { ICandidatesRepository } from '../../repositories/ICandidatesRepository';

@injectable()
class ShowCandidateUseCase {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute({ id }: IShowCandidate): Promise<Candidate> {
    const candidate = await this.candidatesRepository.findById({ id });

    if (!candidate) {
      throw new AppError('Candidate not found!', 404);
    }

    return candidate;
  }
}

export { ShowCandidateUseCase };
