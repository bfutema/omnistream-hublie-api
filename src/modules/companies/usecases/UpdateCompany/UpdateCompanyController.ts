import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCompanyUseCase } from '@modules/companies/usecases/UpdateCompany/UpdateCompanyUseCase';

class UpdateCompanyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { body } = request;

    const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase);

    const updatedCompany = await updateCompanyUseCase.execute({
      id: Number(id),
      ...body,
    });

    return response.status(200).json(instanceToInstance(updatedCompany));
  }
}

const INSTANCE = new UpdateCompanyController();

export { INSTANCE as UpdateCompanyController };
