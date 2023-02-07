import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCompanyUseCase } from '@modules/companies/usecases/CreateCompany/CreateCompanyUseCase';

class CreateCompanyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { body } = request;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);

    const createdCompany = await createCompanyUseCase.execute(body);

    return response.status(201).json(instanceToInstance(createdCompany));
  }
}

const INSTANCE = new CreateCompanyController();

export { INSTANCE as CreateCompanyController };
