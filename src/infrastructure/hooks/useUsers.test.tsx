import { configureStore } from '@reduxjs/toolkit';
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

jest.mock('../services/user.repo');

describe('Given the hook useUsers()', () => {
    interface Current {
        users: {
            isLogged: boolean;
            isLogging: boolean;
            user: User | null;
            token: string;
        };

        handleLogin: (user: ProtoUser) => void;
        handleLogout: (user: ProtoUser) => void;
        handleAddFavorites: (resource: Resource) => void;
        handleDeleteFavorites: (resource: Resource) => void;
    }

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
        UsersRepository.prototype.logIn = jest.fn().mockResolvedValue(mockUser);
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

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockAppStore}>{children}</Provider>
        );
        ({
            result: { current },
        } = renderHook(() => useUsers(), { wrapper }));
    });

    describe('When we use the handleLogin(),', () => {
        test.skip('Then it should return mockUser and have been called', async () => {
            await result.current.handleLogin(mockUser);
            expect(UsersRepository.prototype.logIn).toHaveBeenCalled();
        });
    });

    // describe('When we use the handleAddFav(),', () => {
    //     test('Then it should return mockPlace and have been called', async () => {
    //         await result.current.handleAddFav(mockPlace);
    //         expect(UserRepo.prototype.addFav).toHaveBeenCalled();
    //     });
    // });
});
