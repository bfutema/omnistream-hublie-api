import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteCandidate } from '../../dtos/ICandidateDTO';
import { ICandidatesRepository } from '../../repositories/ICandidatesRepository';

@injectable()
class DeleteCandidateUseCase {
  constructor(
    @inject('CandidatesRepository')
    private candidatesRepository: ICandidatesRepository,
  ) {}

  public async execute({ id }: IDeleteCandidate): Promise<void> {
    const foundedCandidate = await this.candidatesRepository.findById({ id });

    if (!foundedCandidate) {
      throw new AppError('Candidate not found!', 404);
    }

    await this.candidatesRepository.delete(id);
  }
}

export { DeleteCandidateUseCase };
