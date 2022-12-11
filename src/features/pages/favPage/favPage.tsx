import { useEffect } from 'react';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { User } from '../../../infrastructure/services/types/users.types';

export function FavoritePage() {
    const title = 'My favorite Resources';
    const { handleLoad } = useResources();
    const { users, handleDeleteFavorites } = useUsers();
    console.log(users.isLogged);
    console.log(users.user);
    console.log(users.user?.favorites);

    console.log(users.user);
    console.log(users.user?.favorites[0]);

    return (
        <>
            {' '}
            <main>
                <h2>{title}</h2>
                <ul>
                    {(users.user as User).favorites.length > 0 ? (
                        users.user?.favorites.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className="favPage--container">
                                        <iframe
                                            src={item.format}
                                            title={item.title}
                                        ></iframe>
                                        <p>{item.grade}</p>
                                        <p>{item.subject}</p>
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleDeleteFavorites(item)
                                        }
                                    ></button>
                                </li>
                            );
                        })
                    ) : (
                        <p>You don't have any resource in your favorite list</p>
                    )}
                </ul>
            </main>
        </>
    );
}

export default FavoritePage;
