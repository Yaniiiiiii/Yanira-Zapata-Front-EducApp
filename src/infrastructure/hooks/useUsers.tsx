import { useDispatch } from 'react-redux';
import { UsersRepository } from '../services/usersRepo/users.repository';
import * as ac from '../reducer/actionCreator';
import { ProtoUser, User } from '../services/types/users.types';
import { Resource } from '../services/types/resources.types';
import { useSelector } from 'react-redux';
import { rootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

export const useUsers = () => {
    const users = useSelector((state: rootState) => state.users);
    const dispatcher = useDispatch();
    const apiUsers = new UsersRepository();
    const navigate = useNavigate();
    const handleRegister = (user: Partial<User>) => {
        apiUsers
            .register(user)
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleLogin = (user: Partial<ProtoUser>) => {
        apiUsers
            .logIn(user)
            .then((res) => {
                return dispatcher(ac.loginActionCreatorUsers(res));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleAddFavorites = (resource: Partial<Resource>) => {
        apiUsers
            .addFavorites(resource.id as string)
            .then((user) => {
                console.log(user);
                dispatcher(ac.addFavoritesActionCreatorUsers(user));
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDeleteFavorites = (resource: Partial<Resource>) => {
        apiUsers
            .deleteFavorites(resource.id as string)
            .then((user) =>
                dispatcher(ac.deleteFavoritesActionCreatorUsers(user))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDeleteUser = () => {
        apiUsers
            .deleteUser()
            .then(() => {
                dispatcher(ac.logoutActionCreatorUsers());
                localStorage.removeItem('token');
                navigate('/');
            })
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
