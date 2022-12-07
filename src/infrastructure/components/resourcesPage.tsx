import { ResourcesList } from './resourcesList';

function ResourcesPage() {
    return (
        <main>
            <h2>Explore resources</h2>
            <ResourcesList></ResourcesList>
        </main>
    );
}

export default ResourcesPage;

import { Resource } from '../services/types/resources.types';

export function ResourceItem({ resource }: { item: Resource }) {
    return (
        <li>
            <input type={'file'}></input>
        </li>
    );
}

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
            <ul className="resourcesList">
                {resources.map((item: Resource) => (
                    <ResouceItem key={item.id} item={item}></ResouceItem>
                ))}
            </ul>
        </section>
    ) : (
        <div>Tal</div>
    );
}
