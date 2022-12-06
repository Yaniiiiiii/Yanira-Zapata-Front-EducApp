import { Resource } from '../types/resources.types';

export interface ResourcesRepo<R> {
    getAll: () => Promise<Array<R>>;
    get: (id: string) => Promise<R>;
    query: (key: string, value: string) => Promise<Array<R>>;
    post: (resource: Partial<R>) => Promise<R>;
    patch: (id: string, resource: Partial<R>) => Promise<Resource>;
    delete: (id: string) => Promise<void>;
}
