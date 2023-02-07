import { injectable, inject } from 'tsyringe';

import { Company } from '../../infra/typeorm/entities/Company';
import { ICreateCompany } from '../../dtos/ICompanyDTO';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepository';

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute(data: ICreateCompany): Promise<Company> {
    const { id } = await this.companiesRepository.create(data);

    const createdCompany = await this.companiesRepository.findById({ id });

    return createdCompany;
  }
}

export { CreateCompanyUseCase };
