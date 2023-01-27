import { createReducer } from '@reduxjs/toolkit';
import * as ac from './actionCreator';

export const initialModalState = {
    modal: false,
};

export const modalReducer = createReducer(initialModalState, (builder) => {
    builder.addCase(ac.showActionCreatorModals, (state, action) => ({
        ...state,
        modal: true,
    }));
    builder.addCase(ac.hideActionCreatorModals, (state, action) => ({
        ...state,
        modal: false,
    }));
});

// const rootReducer = combineReducers({ modal: modalReducer });
// export type RootState = ReturnType<typeof rootReducer>;
// export default rootReducer;
