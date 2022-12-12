import { configureStore } from '@reduxjs/toolkit';
import { resourceReducer } from '../infrastructure/reducer/resourceReducer';
import { usersReducer } from '../infrastructure/reducer/usersReducer';

export const appStore = configureStore({
    reducer: {
        resources: resourceReducer,
        users: usersReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
