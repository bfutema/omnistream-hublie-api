import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCompanyUseCase } from '@modules/companies/usecases/DeleteCompany/DeleteCompanyUseCase';

class DeleteCompanyController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase);

    await deleteCompanyUseCase.execute({ id: Number(id) });

    return response.status(204).send();
  }
}

const INSTANCE = new DeleteCompanyController();

export { INSTANCE as DeleteCompanyController };
