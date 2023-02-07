import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteRecruiter } from '../../dtos/IRecruiterDTO';
import { IRecruitersRepository } from '../../repositories/IRecruitersRepository';

@injectable()
class DeleteRecruiterUseCase {
  constructor(
    @inject('RecruitersRepository')
    private recruitersRepository: IRecruitersRepository,
  ) {}

  public async execute({ id }: IDeleteRecruiter): Promise<void> {
    const foundedRecruiter = await this.recruitersRepository.findById({ id });

    if (!foundedRecruiter) {
      throw new AppError('Recruiter not found!', 404);
    }

    await this.recruitersRepository.delete(id);
  }
}

export { DeleteRecruiterUseCase };
