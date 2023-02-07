import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Company } from '../../infra/typeorm/entities/Company';
import { IShowCompany } from '../../dtos/ICompanyDTO';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepository';

@injectable()
class ShowCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({ id }: IShowCompany): Promise<Company> {
    const company = await this.companiesRepository.findById({ id });

    if (!company) {
      throw new AppError('Company not found!', 404);
    }

    return company;
  }
}

export { ShowCompanyUseCase };
