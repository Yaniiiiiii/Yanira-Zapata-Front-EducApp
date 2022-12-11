import { configureStore } from '@reduxjs/toolkit';
import { resourceReducer } from '../infrastructure/reducer/resourceReducer';
import { usersReducer } from '../infrastructure/reducer/usersReducer';
import {
    Grade,
    Subject,
} from '../infrastructure/services/types/resources.types';
import { User } from '../infrastructure/services/types/users.types';

export const appStore = configureStore({
    reducer: {
        resources: resourceReducer,
        users: usersReducer,
    },
});

export type rootStore = typeof appStore;
export type appDispatch = typeof appStore.dispatch;
export type rootState = ReturnType<typeof appStore.getState>;
