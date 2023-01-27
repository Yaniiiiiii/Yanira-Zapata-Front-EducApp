import { SyntheticEvent, useState } from 'react';
import { useResources } from '../../../infrastructure/hooks/useResources';
import styles from './searchBar.module.css';

export function SearchBar() {
    const [formState, setFormState] = useState({ subject: '' });

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ subject: element.value });
    };

    const { handleSearch, handleLoad } = useResources();

    const handleSearchResource = (ev: SyntheticEvent) => {
        ev.preventDefault();
        if (formState.subject === '') handleLoad();

        handleSearch(formState.subject);
    };

    return (
        <>
            <div className={styles.searchContaier}>
                <div className={styles.searchbarTitle}>
                    <h2 className={styles.pSearchBar}>Hello, </h2>
                    <p className={styles.pSearchBarSub}>
                        Let's find some awesome resources!
                    </p>
                </div>

                <form action="" onSubmit={handleSearchResource}>
                    <div className={styles.search__inputs}>
                        <select
                            name="subject"
                            value={'subject/' + formState.subject}
                            onChange={handleInput}
                            className={styles.search__input}
                        >
                            <option value=""></option>
                            <option value="reading">reading</option>
                            <option value="math">math</option>
                            <option value="science">science</option>
                            <option value="writing">writing</option>
                        </select>
                        {/* <select
                            name="grade"
                            value={formState.grade}
                            onChange={handleInput}
                            className={styles.search__input}
                        >
                            <option value=""></option>
                            <option value="first">First</option>
                            <option value="second">Second</option>
                            <option value="third">Third</option>
                            <option value="forth">Forth</option>
                        </select> */}
                        <button type="submit" className={styles.search__input}>
                            SEARCH
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default SearchBar;
