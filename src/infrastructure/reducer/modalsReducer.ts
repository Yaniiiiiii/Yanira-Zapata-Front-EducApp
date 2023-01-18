import { createReducer } from '@reduxjs/toolkit';
import * as ac from './actionCreator';

export const initalModalState = {
    modal: false,
};

export const modalsReducer = createReducer(initalModalState, (builder) => {
    builder.addCase(ac.showActionCreatorModals, (state, action) => ({
        ...state,
        modal: true,
    }));
    builder.addCase(ac.hideActionCreatorModals, (state, action) => ({
        ...state,
        modal: false,
    }));
});
