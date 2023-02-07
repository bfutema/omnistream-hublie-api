import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Recruiter } from '../../infra/typeorm/entities/Recruiter';
import { IShowRecruiter } from '../../dtos/IRecruiterDTO';
import { IRecruitersRepository } from '../../repositories/IRecruitersRepository';

@injectable()
class ShowRecruiterUseCase {
  constructor(
    @inject('RecruitersRepository')
    private recruitersRepository: IRecruitersRepository,
  ) {}

  public async execute({ id }: IShowRecruiter): Promise<Recruiter> {
    const recruiter = await this.recruitersRepository.findById({ id });

    if (!recruiter) {
      throw new AppError('Recruiter not found!', 404);
    }

    return recruiter;
  }
}

export { ShowRecruiterUseCase };
