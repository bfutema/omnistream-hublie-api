import { injectable, inject } from 'tsyringe';

import { Recruiter } from '../../infra/typeorm/entities/Recruiter';
import { IListRecruiter } from '../../dtos/IRecruiterDTO';
import { IRecruitersRepository } from '../../repositories/IRecruitersRepository';

@injectable()
class ListRecruiterUseCase {
  constructor(
    @inject('RecruitersRepository')
    private recruitersRepository: IRecruitersRepository,
  ) {}

  public async execute(params: IListRecruiter): Promise<[Recruiter[], number]> {
    const recruiters = await this.recruitersRepository.find(params);

    return recruiters;
  }
}

export { ListRecruiterUseCase };
