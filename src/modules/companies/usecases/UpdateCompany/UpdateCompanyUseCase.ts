import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { Company } from '../../infra/typeorm/entities/Company';
import { IUpdateCompany } from '../../dtos/ICompanyDTO';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepository';

@injectable()
class UpdateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({ id, ...rest }: IUpdateCompany): Promise<Company> {
    const foundedCompanyById = await this.companiesRepository.findById({ id });

    if (!foundedCompanyById) {
      throw new AppError('Company not found!', 404);
    }

    await this.companiesRepository.save({ ...foundedCompanyById, ...rest });

    const updatedCompany = await this.companiesRepository.findById({ id });

    return updatedCompany;
  }
}

export { UpdateCompanyUseCase };
