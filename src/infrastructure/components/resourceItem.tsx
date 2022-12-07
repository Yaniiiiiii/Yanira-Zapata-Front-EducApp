import { Resource } from '../services/types/resources.types';

export function ResourceItem({ resource }: { item: Resource }) {
    return (
        <li>
            <input type={'file'}></input>
        </li>
    );
}
