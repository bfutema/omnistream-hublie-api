import { injectable, inject } from 'tsyringe';

import { Recruiter } from '../../infra/typeorm/entities/Recruiter';
import { ICreateRecruiter } from '../../dtos/IRecruiterDTO';
import { IRecruitersRepository } from '../../repositories/IRecruitersRepository';

@injectable()
class CreateRecruiterUseCase {
  constructor(
    @inject('RecruitersRepository')
    private recruitersRepository: IRecruitersRepository,
  ) {}

  public async execute(data: ICreateRecruiter): Promise<Recruiter> {
    const { id } = await this.recruitersRepository.create(data);

    const createdRecruiter = await this.recruitersRepository.findById({ id });

    return createdRecruiter;
  }
}

export { CreateRecruiterUseCase };
