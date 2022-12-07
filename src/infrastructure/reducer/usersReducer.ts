import { createReducer } from '@reduxjs/toolkit';
import { User } from '../services/types/users.types';
import * as ac from './actionCreator';

const initialState: Array<User> = [];

export const usersReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        ac.loadActionCreatorUsers,
        (_state, action) => action.payload
    );

    builder.addCase(ac.addActionCreatorUsers, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(ac.deleteActionCreatorUsers, (state, action) => {
        state.filter((user) => user.id !== action.payload);
    });
    builder.addCase(ac.updateActionCreatorUsers, (state, action) => {
        state.map((user) =>
            user.id !== action.payload.id ? action.payload : user
        );
    });
    builder.addDefaultCase((state) => state);
});
