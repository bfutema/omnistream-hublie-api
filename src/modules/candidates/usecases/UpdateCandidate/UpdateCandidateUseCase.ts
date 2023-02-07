import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Candidate } from '../../infra/typeorm/entities/Candidate';
import { IUpdateCandidate } from '../../dtos/ICandidateDTO';
import { ICandidatesRepository } from '../../repositories/ICandidatesRepository';

@injectable()
class UpdateCandidateUseCase {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateCandidate): Promise<Candidate> {
    const foundedCandidateById = await this.candidatesRepository.findById({ id });

    if (!foundedCandidateById) {
      throw new AppError('Candidate not found!', 404);
    }

    await this.candidatesRepository.save({ ...foundedCandidateById, ...rest });

    const updatedCandidate = await this.candidatesRepository.findById({ id });

    return updatedCandidate;
  }
}

export { UpdateCandidateUseCase };
