import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { UsersRepository } from '../services/usersRepo/users.repository';
import * as ac from '../reducer/actionCreator';
import { User } from '../services/types/users.types';
import { Resource } from '../services/types/resources.types';

export const useUsers = () => {
    const users = useAppSelector((state) => state.users);
    const dispatcher = useDispatch();
    const apiUsers = new UsersRepository();

    const handleRegister = (user: Partial<User>) => {
        apiUsers
            .register(user)
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleLogin = (user: Partial<User>) => {
        apiUsers
            .logIn(user)
            .then((data: string) =>
                dispatcher(ac.loginActionCreatorUsers(data))
            )
            .catch((error: Error) => console.log(error.name, error.message));
        console.log(user);
    };

    const handleAddFavorites = (id: Partial<Resource>) => {
        apiUsers
            .addFavorites(id)
            .then((user: User) =>
                dispatcher(ac.addFavoritesActionCreatorUsers(user))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDeleteFavorites = (id: Partial<Resource>) => {
        apiUsers
            .deleteFavorites(id)
            .then((user: User) =>
                dispatcher(ac.deleteFavoritesActionCreatorUsers(user))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDeleteUser = (id: Partial<Resource>) => {
        apiUsers
            .deleteUser()
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        users,
        handleRegister,
        handleLogin,
        handleAddFavorites,
        handleDeleteFavorites,
        handleDeleteUser,
    };
};
