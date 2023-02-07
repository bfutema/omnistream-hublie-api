import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { HttpQuery } from '@http-query/core';

import { ListNotificationUseCase } from '@modules/common/usecases/ListNotifications/ListNotificationsUseCase';

class ListNotificationsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const query = HttpQuery.getParsedQuery(request.query);

    const listNotificationUseCase = container.resolve(ListNotificationUseCase);

    const [notifications, total] = await listNotificationUseCase.execute({
      query,
      relations: request.headers.relations
        ? String(request.headers.relations).split(',')
        : [],
    });

    const results = {
      page: Number(query.page + 1),
      limit: Number(query.limit),
      total: Number(total),
      data: notifications,
    };

    return response.status(200).json(instanceToInstance(results));
  }
}

const INSTANCE = new ListNotificationsController();

export { INSTANCE as ListNotificationsController };
