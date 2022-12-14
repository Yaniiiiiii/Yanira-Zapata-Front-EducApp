import { Resource } from '../types/resources.types.js';
import { ResourcesRepo } from './resourcesRepoI.js';

export class ResourceRepository implements ResourcesRepo<Resource> {
    url: string;

    constructor() {
        this.url = 'http://localhost:7700/resources';
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAll(): Promise<Array<Resource>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw this.createError(response);
            })
            .then((data) => data.resource)
            .catch((error) => `${error}`);
    }

    get(id: string): Promise<Resource> {
        return fetch(`${this.url}/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw this.createError(response);
            })
            .then((data) => data.resource)
            .catch((error) => `${error}`);
    }

    query(key: string, value: string): Promise<Array<Resource>> {
        return fetch(`${this.url}/${key}/${value}`)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .then((data) => data.resource)
            .catch((error) => `${error}`);
    }

    create(resource: Partial<Resource>): Promise<Resource> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(resource),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    delete(id: string): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
                response.json();
            })
            .catch((error) => `${error}` as unknown as void);
    }
    update(resource: Partial<Resource>): Promise<Resource> {
        return fetch(`${this.url}/${resource.id}`, {
            method: 'PATCH',
            body: JSON.stringify(resource),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => `${error}`);
    }
}
