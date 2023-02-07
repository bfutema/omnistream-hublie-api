import { Router } from 'express';

import { CreateCompanyController } from '../../usecases/CreateCompany/CreateCompanyController';
import { DeleteCompanyController } from '../../usecases/DeleteCompany/DeleteCompanyController';
import { ListCompaniesController } from '../../usecases/ListCompanies/ListCompaniesController';
import { ShowCompanyController } from '../../usecases/ShowCompany/ShowCompanyController';
import { UpdateCompanyController } from '../../usecases/UpdateCompany/UpdateCompanyController';

const companiesRouter = Router();

companiesRouter.get('/', ListCompaniesController.handle);
companiesRouter.post('/', CreateCompanyController.handle);
companiesRouter.get('/:id', ShowCompanyController.handle);
companiesRouter.put('/:id', UpdateCompanyController.handle);
companiesRouter.delete('/:id', DeleteCompanyController.handle);

export { companiesRouter };
