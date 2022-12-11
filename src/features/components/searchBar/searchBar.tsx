import { ResourceRepository } from '../../../../src/infrastructure/services/resourcesRepo/resources.repository';
import { SyntheticEvent, useState } from 'react';

export function SearchBar() {
    const initialState = {
        subject: '',
        grade: '',
    };
    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const resourceRepo = new ResourceRepository();

    const handleSearch = (ev: SyntheticEvent) => {
        ev.preventDefault();
        resourceRepo.query();
        setFormState(initialState);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Subject"
                name="search"
                value={formState.subject}
                onInput={handleInput}
            />
            <input
                type="text"
                placeholder="Grade"
                name="search"
                value={formState.grade}
                onInput={handleInput}
            />
            <button type="submit" />
        </form>
    );
}
export default SearchBar;
