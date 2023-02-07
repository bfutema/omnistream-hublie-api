import 'reflect-metadata';
import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import http from 'http';
import socket from 'socket.io';

import 'express-async-errors';

import { env } from '@config/env';
import { handler } from '@shared/errors/Handler';

import { connect } from '../typeorm';
import { routes } from './routes';

const app = express();

const server = http.createServer(app);

const io = new socket.Server(server, { cors: { origin: env.APP_WEB_URL } });

connect();

async function ignition(): Promise<void> {
  // Configurations
  app.use(cors());
  app.use(express.json());

  // Rotas
  app.use(routes);

  // Errors
  app.use(handler);
}

ignition();

export { server, io };
