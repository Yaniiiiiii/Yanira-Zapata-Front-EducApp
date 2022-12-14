import { mockResource, mockResources, mockUser } from '../../mocks/mocks';
import { User } from '../services/types/users.types';
import { actionTypesUsers } from './actionTypes';
import { usersReducer } from './usersReducer';

let action: { type: string; payload: unknown };
let state: {
    isLogged: boolean;
    isLogging: boolean;
    user: User | null;
    token: string;
};

describe('When the action is LOGGING', () => {
    test('Then the returned state should include isLogging on true in the action payload', () => {
        action = {
            type: actionTypesUsers.logging,
            payload: {
                isLogging: true,
                isLogged: false,
                user: null,
                token: '',
            },
        };

        const result = usersReducer(state, action);
        expect(result).toEqual(action.payload);
    });
});

describe('When the action is LOGIN', () => {
    test('Then the returned state should be the user and token action payload', () => {
        action = {
            type: actionTypesUsers.login,
            payload: {
                isLogging: false,
                isLogged: true,
                token: 'token',
                user: mockUser,
            },
        };
        state = {
            ...state,
        };
        const result = usersReducer(state, action);
        expect(result).toEqual(action.payload);
    });
});

describe('When the action is LOGOUT', () => {
    test('Then the returned state should be the initialState', () => {
        action = {
            type: actionTypesUsers.logout,
            payload: {
                isLogging: false,
                isLogged: false,
                user: null,
                token: null,
            },
        };
        state = {
            ...state,
        };
        const result = usersReducer(state, action);
        expect(result).toEqual(state);
    });
});

describe('When the action is addFavorites', () => {
    test('Then the return state should include the updated action payload', () => {
        action = {
            type: actionTypesUsers.addFavorites,
            payload: mockResources[0],
        };
        state = {
            ...state,
        };
        const result = usersReducer(state, action);
        expect(result.user?.favorites).toEqual(undefined);
    });
});

describe('When the action is deleteFavorites', () => {
    test('Then the return state should include the updated action payload', () => {
        action = {
            type: actionTypesUsers.deleteFavorites,
            payload: mockResource,
        };
        state = {
            ...state,
        };
        const result = usersReducer(state, action);
        expect(result.user?.email).toEqual(undefined);
    });
});

describe('When the action type is any other', () => {
    test('Then the returned state should not include the action payload', () => {
        action = {
            type: '',
            payload: null,
        };
        state = {
            ...state,
        };
        const result = usersReducer(state, action);
        expect(result).toEqual(state);
    });
});
