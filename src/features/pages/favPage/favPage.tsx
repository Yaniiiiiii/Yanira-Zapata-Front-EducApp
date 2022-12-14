import Footer from '../../../infrastructure/components/footer/footer';
import { Header } from '../../../infrastructure/components/header/header';

import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { User } from '../../../infrastructure/services/types/users.types';

/* istanbul ignore file */

export function FavoritePage() {
    const title = 'My favorite Resources';
    //const { handleLoad } = useResources();
    const { users, handleDeleteFavorites } = useUsers();

    return (
        <>
            <Header></Header>
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
            <Footer />
        </>
    );
}

export default FavoritePage;
