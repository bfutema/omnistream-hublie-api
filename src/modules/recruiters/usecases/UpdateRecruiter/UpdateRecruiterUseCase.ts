import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Recruiter } from '../../infra/typeorm/entities/Recruiter';
import { IUpdateRecruiter } from '../../dtos/IRecruiterDTO';
import { IRecruitersRepository } from '../../repositories/IRecruitersRepository';

@injectable()
class UpdateRecruiterUseCase {
  constructor(
    @inject('RecruitersRepository')
    private recruitersRepository: IRecruitersRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateRecruiter): Promise<Recruiter> {
    const foundedRecruiterById = await this.recruitersRepository.findById({ id });

    if (!foundedRecruiterById) {
      throw new AppError('Recruiter not found!', 404);
    }

    await this.recruitersRepository.save({ ...foundedRecruiterById, ...rest });

    const updatedRecruiter = await this.recruitersRepository.findById({ id });

    return updatedRecruiter;
  }
}

export { UpdateRecruiterUseCase };
