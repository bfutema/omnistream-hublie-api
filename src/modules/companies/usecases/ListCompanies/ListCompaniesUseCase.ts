import { injectable, inject } from 'tsyringe';

import { Company } from '../../infra/typeorm/entities/Company';
import { IListCompany } from '../../dtos/ICompanyDTO';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepository';

@injectable()
class ListCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute(params: IListCompany): Promise<[Company[], number]> {
    const companies = await this.companiesRepository.find(params);

    return companies;
  }
}

export { ListCompanyUseCase };
