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
        format: '',
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
            title: addResource.title,
        };
        handleAdd(newResource);
        setAddResource(formInitialState);
    };

    return (
        <section>
            <h2>{title}</h2>

            <form onSubmit={handleSubmit}>
                <div className="add--title">
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
                <div className="add--subject">
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
                <div className="add--grade">
                    {' '}
                    <input
                        type="text"
                        name="grade"
                        placeholder="Grade"
                        value={addResource.grade}
                        onInput={handleInput}
                        required
                    ></input>
                </div>
                <div className="add--pages">
                    {' '}
                    <input
                        type="text"
                        name="pages"
                        placeholder="Pages"
                        value={addResource.pages}
                        onInput={handleInput}
                        required
                    ></input>
                </div>

                <div className="add--file">
                    <label htmlFor="file">Upload your resource</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        accept="image/*,.pdf"
                        value={addResource.format}
                        onInput={handleInput}
                        required
                    ></input>
                </div>

                <button className="addResourceButton" type="submit">
                    Create Resource
                </button>
            </form>
        </section>
    );
}
export default AddResource;
