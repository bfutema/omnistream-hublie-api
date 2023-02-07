import { injectable, inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IDeleteCompany } from '../../dtos/ICompanyDTO';
import { ICompaniesRepository } from '../../repositories/ICompaniesRepository';

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({ id }: IDeleteCompany): Promise<void> {
    const foundedCompany = await this.companiesRepository.findById({ id });

    if (!foundedCompany) {
      throw new AppError('Company not found!', 404);
    }

    await this.companiesRepository.delete(id);
  }
}

export { DeleteCompanyUseCase };
