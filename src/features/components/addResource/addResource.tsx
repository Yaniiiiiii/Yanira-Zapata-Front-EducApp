import { SyntheticEvent, useState } from 'react';
import { useResources } from '../../../infrastructure/hooks/useResources';
import { ProtoResource } from '../../../infrastructure/services/types/resources.types';

export function AddResource() {
    const title = "Let's create some content!";
    const { handleAdd } = useResources();

    const formInitialState = {
        title: '',
        subject: undefined,
        grade: undefined,
        description: '',
        pages: '',
        price: '',
    };

    const [addResource, setAddResource] = useState(formInitialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setAddResource({ ...addResource, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const newResource: ProtoResource = {
            ...addResource,
            price: +addResource.price,
        };
        handleAdd(newResource);
        setAddResource(formInitialState);
    };

    return (
        <section>
            <h2>{title}</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    {' '}
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={addResource.title}
                        onInput={handleInput}
                        required
                    ></input>
                </div>
                <div>
                    {' '}
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={addResource.subject}
                        onInput={handleInput}
                        required
                    ></input>
                </div>
                <input
                    type="text"
                    name="grade"
                    placeholder="Grade"
                    value={addResource.grade}
                    onInput={handleInput}
                    required
                ></input>
                <input
                    type="text"
                    name="pages"
                    placeholder="Pages"
                    value={addResource.pages}
                    onInput={handleInput}
                    required
                ></input>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={addResource.price}
                    onInput={handleInput}
                    required
                ></input>
                <button className="addResourceButton" type="submit">
                    Create Resource
                </button>
            </form>
        </section>
    );
}
export default AddResource;
