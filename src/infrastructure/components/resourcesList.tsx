import { ResourceItem } from '../../features/components/resourceItem/resourceItem';
import { useResources } from '../hooks/useResources';
import { Resource } from '../services/types/resources.types';

export function ResourcesList() {
    const title = 'Resources';
    const { resources, handleLoad } = useResources();
    console.log(resources);

    return resources.length ? (
        <section>
            <p>{resources[0].title}</p>
            <h2>{title}</h2>
            <form>
                <label>
                    <input type="text" name="name"></input>
                </label>
                <label>
                    <input type="submit" name="submit"></input>
                </label>
            </form>

            <ul className="resourcesList">
                {resources.map((item: Resource) => (
                    <ResourceItem key={item.id} item={item}></ResourceItem>
                ))}
            </ul>
        </section>
    ) : (
        <div>Tal</div>
    );
}
