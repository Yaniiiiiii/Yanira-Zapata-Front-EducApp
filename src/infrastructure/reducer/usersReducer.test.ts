import { mockUser } from '../../mocks/mocks';
import { User } from '../services/types/users.types';
import { actionTypesUsers } from './actionTypes';
import { usersReducer } from './usersReducer';

describe('Given the function usersReducer', () => {
    let action: { type: string; payload: unknown };
    let state: Array<User>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypesUsers.load,
                payload: [mockUser],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = usersReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypesUsers.add,
                payload: mockUser,
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = usersReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypesUsers.delete,
                payload: { ...mockUser },
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = usersReducer(state, action);
            expect(result).toEqual([]);
        });
    });
    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypesUsers.update,
                payload: { mockUser: mockUser, id: 's' },
            };
            state = [];
        });
        test('Then the returned state should be the original', () => {
            const result = usersReducer(state, action);
            expect(result).toEqual([]);
        });
    });
    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypesUsers.update,
                payload: { ...mockUser, id: '3' },
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = usersReducer(state, action);
            expect(result).toEqual([]);
        });
    });
    describe('When none of the reducers are executed', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [mockUser];
        });
        test('Then it should return the state <mockResource>', () => {
            const result = usersReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
