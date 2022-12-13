import { configureStore } from '@reduxjs/toolkit';
import { Router } from '@remix-run/router';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockResource, mockUser } from '../../mocks/mocks';
import { rootState, rootStore } from '../../store/store';
import { resourceReducer } from '../reducer/resourceReducer';
import { usersReducer } from '../reducer/usersReducer';
import { Resource } from '../services/types/resources.types';
import { ProtoUser, User } from '../services/types/users.types';
import { UsersRepository } from '../services/usersRepo/users.repository';
import { useUsers } from './useUsers';

jest.mock('../services/usersRepo/users.repository');

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => ({
        navigate: jest.fn().mockImplementation(() => ({})),
    }),
}));

describe('Given the hook useUsers()', () => {
    interface Current {
        users: {
            isLogged: boolean;
            isLogging: boolean;
            user: User | null;
            token: string;
        };

        handleLogin: (user: ProtoUser) => void;
        handleRegister: (user: ProtoUser) => void;
        handleDeleteUser: () => void;
        handleAddFavorites: (resource: Resource) => void;
        handleDeleteFavorites: (resource: Resource) => void;
    }
    let router: Router;
    let current: Current;

    let mockStore: rootStore;

    const preloadState: Partial<rootState> = {
        users: {
            isLogged: true,
            isLogging: false,
            user: mockUser,
            token: '',
        },
    };

    const mockAppStore = configureStore({
        reducer: {
            resources: resourceReducer,
            users: usersReducer,
        },
        preloadedState: preloadState,
    });

    beforeEach(async () => {
        UsersRepository.prototype.addFavorites = jest
            .fn()
            .mockResolvedValue(mockResource);
        UsersRepository.prototype.addFavorites = jest
            .fn()
            .mockResolvedValue(mockUser);
        UsersRepository.prototype.deleteFavorites = jest
            .fn()
            .mockResolvedValue(mockUser);
        UsersRepository.prototype.deleteUser = jest
            .fn()
            .mockResolvedValue(mockUser);
        UsersRepository.prototype.register = jest
            .fn()
            .mockResolvedValue(mockUser);
        UsersRepository.prototype.logIn = jest.fn().mockResolvedValue(mockUser);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockAppStore}>{children}</Provider>
        );
        ({
            result: { current },
        } = renderHook(() => useUsers(), { wrapper }));
    });

    test('Then it should return mockUser and have been called', () => {
        current.handleLogin(mockUser);
        expect(UsersRepository.prototype.logIn).toHaveBeenCalled();
    });
    test('Then when there is an error in handleLogin it should call the catch method', () => {
        (UsersRepository.prototype.logIn as jest.Mock).mockRejectedValueOnce(
            new Error()
        );
        const result = current.handleLogin(mockUser);
        expect(result).toBe(undefined);
    });

    describe('When we use the handleAddFav(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            current.handleAddFavorites(mockResource);
            expect(UsersRepository.prototype.addFavorites).toHaveBeenCalled();
        });
        test('Then when there is an error in handleAddFav it should call the catch method', () => {
            (
                UsersRepository.prototype.addFavorites as jest.Mock
            ).mockRejectedValueOnce(new Error());
            const result = current.handleAddFavorites(mockResource);
            expect(result).toBe(undefined);
        });
    });
    describe('When we use the handleDeleteFav(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            current.handleDeleteFavorites(mockResource);
            expect(
                UsersRepository.prototype.deleteFavorites
            ).toHaveBeenCalled();
        });
        test('Then when there is an error in handleDeleteFav it should call the catch method', () => {
            (
                UsersRepository.prototype.deleteFavorites as jest.Mock
            ).mockRejectedValueOnce(new Error());
            const result = current.handleDeleteFavorites(mockResource);
            expect(result).toBe(undefined);
        });
    });
    describe('When we use the handleDeleteUser(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            current.handleDeleteUser();
            expect(UsersRepository.prototype.deleteUser).toHaveBeenCalled();
        });
        test('Then when there is an error in handleDeleteUser it should call the catch method', () => {
            (
                UsersRepository.prototype.deleteUser as jest.Mock
            ).mockRejectedValueOnce(new Error());
            const result = current.handleDeleteUser();
            expect(result).toBe(undefined);
        });
    });
    describe('When we use the handleRegister(),', () => {
        test('Then it should return mockPlace and have been called', async () => {
            current.handleRegister(mockUser);
            expect(UsersRepository.prototype.register).toHaveBeenCalled();
        });
        test('Then when there is an error in handleRegister it should call the catch method', () => {
            (
                UsersRepository.prototype.register as jest.Mock
            ).mockRejectedValueOnce(new Error());
            const result = current.handleRegister(mockUser);
            expect(result).toBe(undefined);
        });
    });
});
