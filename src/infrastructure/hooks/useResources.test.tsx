import { configureStore } from '@reduxjs/toolkit';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockResource, mockResources } from '../../mocks/mocks';
import { rootState, rootStore } from '../../store/store';
import { resourceReducer } from '../reducer/resourceReducer';
import { usersReducer } from '../reducer/usersReducer';
import { ResourceRepository } from '../services/resourcesRepo/resources.repository';
import { Resource } from '../services/types/resources.types';
import { useResources } from './useResources';

jest.mock('../services/resourcesRepo/resources.repository');

describe('Given the custom hook use component', () => {
    interface Current {
        resources: Resource[];
        handleLoad: () => void;
        handleAdd: (newResource: Resource) => void;
        handleDelete: (id: string) => void;
        handleUpdate: (updateResource: Resource) => void;
    }

    let current: Current;
    let mockStore: rootStore;

    beforeEach(async () => {
        ResourceRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue(mockResources);
        ResourceRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(mockResource);
        ResourceRepository.prototype.delete = jest.fn().mockResolvedValue({});
        ResourceRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(mockResource);

        const preloadedState: rootState = {
            resources: [],
            users: {
                isLogged: false,
                isLogging: false,
                user: null,
                token: '',
            },
        };
        mockStore = configureStore({
            reducer: {
                resources: resourceReducer,
                users: usersReducer,
            },
            preloadedState,
        });
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockStore}> {children} </Provider>
        );
        ({
            result: { current },
        } = renderHook(() => useResources(), { wrapper }));
    });

    test('then if the hook call handleLoad, it call the repository for the initial data and dispatch an action for load the data in the state', () => {
        current.handleLoad();
        expect(ResourceRepository.prototype.getAll).toHaveBeenCalled();
    });
    test('Then when there is an error in handleLoad it should call the catch method', async () => {
        const mockCLG = jest.spyOn(global.console, 'log');
        (
            ResourceRepository.prototype.getAll as jest.Mock
        ).mockRejectedValueOnce(new Error());
        await current.handleLoad();
        expect(mockCLG).toHaveBeenCalled();
        expect(ResourceRepository.prototype.getAll).toHaveBeenCalled();
    });
    test('then if the hook call handleAdd, it call the repository to add a new album and dispatch an action to add the album to the state', async () => {
        //expect(current.handleAdd).toEqual([]);
        current.handleAdd(mockResource);
        expect(ResourceRepository.prototype.create).toHaveBeenCalled();
    });
    test('Then when there is an error in handleAdd it should call the catch method', () => {
        (
            ResourceRepository.prototype.create as jest.Mock
        ).mockRejectedValueOnce(new Error());
        current.handleAdd(mockResource);
        expect(ResourceRepository.prototype.create).toHaveBeenCalled();
    });
    test('then if the hook call handleUpdate, it call the repository to update a album and dispatch an action to update the album in the state', () => {
        current.handleUpdate(mockResource);
        expect(ResourceRepository.prototype.update).toHaveBeenCalled();
    });
    test('Then when there is an error in handleUpdate it should call the catch method', () => {
        (
            ResourceRepository.prototype.update as jest.Mock
        ).mockRejectedValueOnce(new Error());
        current.handleUpdate(mockResource);
        expect(ResourceRepository.prototype.update).toHaveBeenCalled();
    });
    test('then if the hook call handleDelete, it call the repository to delete a album and dispatch an action to delete album from state', async () => {
        current.handleDelete('3');
        expect(ResourceRepository.prototype.delete).toHaveBeenCalled();
    });
    test('Then when there is an error in handleDelete it should call the catch method', () => {
        (
            ResourceRepository.prototype.delete as jest.Mock
        ).mockRejectedValueOnce(new Error());
        current.handleDelete('1');
        expect(ResourceRepository.prototype.delete).toHaveBeenCalled();
    });
});
