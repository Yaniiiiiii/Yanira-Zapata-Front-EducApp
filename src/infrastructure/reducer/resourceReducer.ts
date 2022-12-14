import { createReducer } from '@reduxjs/toolkit';
import { Resource } from '../services/types/resources.types';
import * as ac from './actionCreator';

const initialState: Array<Resource> = [];

export const resourceReducer = createReducer(initialState, (builder) => {
    builder.addCase(
        ac.loadActionCreatorResources,
        (_state, action) => action.payload
    );
    builder.addCase(ac.addActionCreatorResource, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addCase(ac.deleteActionCreatorResource, (state, action) => {
        state.filter((resource) => resource.id !== action.payload);
    });
    builder.addCase(ac.updateActionCreatorResource, (state, action) => {
        state.map((resource) =>
            resource.id !== action.payload.id ? action.payload : resource
        );
    });
    builder.addCase(
        ac.resourceSearchCreatorAction,
        (_state, action) => action.payload
    );
    builder.addDefaultCase((state) => state);
});
