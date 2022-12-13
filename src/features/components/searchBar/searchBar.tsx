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

    const { handleSearch, handleLoad } = useResources();

    const handleSearchResource = (ev: SyntheticEvent) => {
        ev.preventDefault();
        // if (formState.subject === '') handleLoad();
        handleSearch(formState.grade, formState.subject);
    };

    // const handleChange = (ev: SyntheticEvent) => {
    //     ev.preventDefault();
    //     const element = ev.target as HTMLFormElement;
    //     setFormState({ ...formState, [element.name]: element.value });
    // };

    return (
        <>
            <div className={styles.searchContaier}>
                <h2>Hello, </h2>
                <p>Let's find some awesome resources!</p>
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
