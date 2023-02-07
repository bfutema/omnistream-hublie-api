import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCompanyUseCase } from '@modules/companies/usecases/ShowCompany/ShowCompanyUseCase';

class ShowCompanyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCompanyUseCase = container.resolve(ShowCompanyUseCase);

    const foundedCompany = await showCompanyUseCase.execute({ id: Number(id) });

    return response.status(200).json(instanceToInstance(foundedCompany));
  }
}

const INSTANCE = new ShowCompanyController();

export { INSTANCE as ShowCompanyController };
