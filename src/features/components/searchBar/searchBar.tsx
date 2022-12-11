import { ResourceRepository } from '../../../../src/infrastructure/services/resourcesRepo/resources.repository';
import { SyntheticEvent, useState } from 'react';
import { useResources } from '../../../infrastructure/hooks/useResources';

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
            <div>
                <form action="" onSubmit={handleSearchResource}>
                    <input
                        type="text"
                        value={formState.subject}
                        name="grade"
                        onChange={handleInput}
                    />
                    {/* <select name="subject" onChange={handleInput}>
                        <option value=""></option>
                        <option value="reading">Reading</option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="writing">Writing</option>
                    </select> */}
                    <button type="submit">SEARCH</button>
                </form>
            </div>
            <div>
                <input
                    type="text"
                    value={formState.grade}
                    name="grade"
                    onChange={handleInput}
                />
            </div>
        </>
    );
}
export default SearchBar;
