import { mockResource, mockResources } from '../../mocks/mocks';
import { Resource } from '../services/types/resources.types';
import { actionTypesResources } from './actionTypes';
import { resourceReducer } from './resourceReducer';

describe('Given the function resourceReducer', () => {
    let action: { type: string; payload: unknown };
    let state: Array<Resource>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypesResources.load,
                payload: [mockResource],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = resourceReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('When the action is add', () => {
        beforeEach(() => {
            action = {
                type: actionTypesResources.add,
                payload: mockResource,
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = resourceReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe('When the action is delete', () => {
        beforeEach(() => {
            action = {
                type: actionTypesResources.delete,
                payload: { ...mockResource, id: '3' },
            };
            state = [mockResource];
        });
        test('Then the returned state should be the action payload', () => {
            const result = resourceReducer(state, action);
            expect(result).toEqual([action.payload]);
        });
    });
    describe('When the action is update and the id is not valid', () => {
        beforeEach(() => {
            action = {
                type: actionTypesResources.update,
                payload: { ...mockResource, id: '0', name: 'update' },
            };
            state = [mockResource];
        });
        test('Then the returned state should be the original', () => {
            const result = resourceReducer(state, action);
            expect(result).toEqual([mockResource]);
        });
    });
    describe('When the action is update', () => {
        beforeEach(() => {
            action = {
                type: actionTypesResources.update,
                payload: { ...mockResource, id: '3' },
            };
            state = [mockResource];
        });
        test('Then the returned state should be the action payload', () => {
            const result = resourceReducer(state, action);
            expect(result).toEqual([action.payload]);
        });
    });
    describe('When none of the reducers are executed', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [mockResource];
        });
        test('Then it should return the state <mockResource>', () => {
            const result = resourceReducer(state, action);
            expect(result).toEqual(state);
        });
    });
    describe('When the action is search by key and value', () => {
        beforeEach(() => {
            action = {
                type: actionTypesResources.loadSearch,
                payload: mockResources,
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = resourceReducer(state, action);
            expect(result).toBe(mockResources);
        });
    });
});
