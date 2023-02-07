import { IQuery } from '@http-query/core';

import {
  NonFunctionProperties,
  ObjectPropertyNames,
  PrimitiveProperties,
} from '@shared/contracts/IGeneric';

import { Profile } from '../infra/typeorm/entities/Profile';

/**
 * Model: Profile
 */
export type IProfile = NonFunctionProperties<Profile>;

/**
 * Method: POST
 * Create Profile
 */
export type ICreateProfile = PrimitiveProperties<
  Omit<IProfile, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;

/**
 * Method: GET
 * LIST Profile
 */
export type IListProfile = {
  query?: IQuery;
  relations?: ObjectPropertyNames<IProfile>[] | string[];
};

/**
 * Method: GET
 * SHOW Profile
 */
export type IShowProfile = Pick<IProfile, 'id'> & {
  relations?: ObjectPropertyNames<IProfile>[] | string[];
};

/**
 * Method: PUT
 * Update Profile
 */
export type IUpdateProfile = ICreateProfile & { id: number };

/**
 * Method: PATCH
 * Update Profile
 */
export type IPartialUpdateProfile = Partial<IUpdateProfile>;

/**
 * DELETE Profile
 */
export type IDeleteProfile = Pick<IUpdateProfile, 'id'>;
