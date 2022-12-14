import { createReducer } from '@reduxjs/toolkit';
import { User } from '../services/types/users.types';
import * as ac from './actionCreator';

export const initialState: {
    isLogged: boolean;
    isLogging: boolean;
    user: User | null;
    token: string;
} = { isLogged: false, isLogging: false, token: '', user: null };

export const usersReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loggingActionCreatorUsers, (state, action) => ({
        ...state,
        isLogging: true,
    }));

    builder.addCase(ac.loginActionCreatorUsers, (state, action) => ({
        ...state,
        isLogged: true,
        isLogging: false,
        token: action.payload.token,
        user: action.payload.user,
    }));

    builder.addCase(ac.logoutActionCreatorUsers, (state, action) => ({
        ...state,
    }));

    builder.addCase(ac.addFavoritesActionCreatorUsers, (state, action) => ({
        ...state,
        isLogged: true,
        user: action.payload,
    }));

    builder.addCase(ac.deleteFavoritesActionCreatorUsers, (state, action) => ({
        ...state,
        isLogged: true,
        user: action.payload,
    }));
    builder.addDefaultCase((state) => state);
});
