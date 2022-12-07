import { createAction } from '@reduxjs/toolkit';
import { Resource } from '../services/types/resources.types';
import { User } from '../services/types/users.types';
import { actionTypesResources, actionTypesUsers } from './actionTypes';

export const loadActionCreatorResources = createAction<Array<Resource>>(
    actionTypesResources.load
);
export const addActionCreatorResource = createAction<Resource>(
    actionTypesResources.add
);
export const deleteActionCreatorResource = createAction<Resource['id']>(
    actionTypesResources.delete
);
export const updateActionCreatorResource = createAction<Resource>(
    actionTypesResources.update
);

export const loadActionCreatorUsers = createAction<Array<User>>(
    actionTypesUsers.load
);
export const addActionCreatorUsers = createAction<User>(actionTypesUsers.add);
export const deleteActionCreatorUsers = createAction<User['id']>(
    actionTypesUsers.delete
);
export const updateActionCreatorUsers = createAction<User>(
    actionTypesUsers.update
);
