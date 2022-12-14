import Footer from '../../../infrastructure/components/footer/footer';
import { Header } from '../../../infrastructure/components/header/header';
import { useUsers } from '../../../infrastructure/hooks/useUsers';
import { User } from '../../../infrastructure/services/types/users.types';
import style from './favPage.module.css';

/* istanbul ignore file */

export function FavoritePage() {
    const { users, handleDeleteFavorites } = useUsers();

    return (
        <>
            <Header></Header>
            <main className={style.favMain}>
                <h2 className={style.favTitle}>My favorite Resources</h2>
                <div className={style.ulContainer}>
                    <ul className={style.favul}>
                        {(users.user as User).favorites.length > 0 ? (
                            users.user?.favorites.map((item) => {
                                return (
                                    <li key={item.id} className={style.card}>
                                        <div className={style.favPagecontainer}>
                                            <img
                                                width="150px"
                                                src="/assets/resource2.png"
                                                className={style.imgFav}
                                                alt="fav"
                                            ></img>
                                            <div className={style.container}>
                                                <div
                                                    className={style.cardTitle}
                                                >
                                                    <p>{item.grade}</p>
                                                    <p
                                                        className={
                                                            style.gradeFav
                                                        }
                                                    >
                                                        - {item.subject}
                                                    </p>
                                                </div>

                                                <button
                                                    className={
                                                        style.buttonDelete
                                                    }
                                                    onClick={() =>
                                                        handleDeleteFavorites(
                                                            item
                                                        )
                                                    }
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                            <p>
                                You don't have any resource in your favorite
                                list
                            </p>
                        )}
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default FavoritePage;
