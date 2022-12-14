import { SyntheticEvent, useState } from 'react';
import { useResources } from '../../../infrastructure/hooks/useResources';
import styles from './searchBar.module.css';

export function SearchBar() {
    const initialState: { subject: string; grade: string } = {
        subject: '',
        grade: '',
    };
    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const { handleSearch } = useResources();

    const handleSearchResource = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleSearch(formState.grade, formState.subject);
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
                            value={formState.subject}
                            onChange={handleInput}
                            className={styles.search__input}
                        >
                            <option value=""></option>
                            <option value="reading">Reading</option>
                            <option value="math">Math</option>
                            <option value="science">Science</option>
                            <option value="writing">Writing</option>
                        </select>
                        <select
                            name="grade"
                            value={formState.grade}
                            onChange={handleInput}
                            className={styles.search__input}
                        >
                            <option value=""></option>
                            <option value="first">Reading</option>
                            <option value="second">Math</option>
                            <option value="third">Science</option>
                            <option value="forth">Writing</option>
                        </select>
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
