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

export const loggingActionCreatorUsers = createAction<void>(
    actionTypesUsers.logging
);
export const loginActionCreatorUsers = createAction<{
    user: User;
    token: string;
}>(actionTypesUsers.login);
export const logoutActionCreatorUsers = createAction<void>(
    actionTypesUsers.logout
);
export const deleteFavoritesActionCreatorUsers = createAction<User>(
    actionTypesUsers.deleteFavorites
);
export const addFavoritesActionCreatorUsers = createAction<User>(
    actionTypesUsers.addFavorites
);
