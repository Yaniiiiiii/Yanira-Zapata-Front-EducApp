import { Resource } from './resources.types';

export type ProtoUser = {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    school?: string;
    grade?: string;
    resources?: Array<Resource>;
    favorites?: Array<Resource>;
    carts?: Array<Resource>;
};

export type User = {
    name: string;
    email: string;
    password: string;
    role: string;
    school: string;
    grade: string;
    resources: Array<Resource>;
    favorites: Array<Resource>;
    carts?: Array<Resource>;
    id: string;
};

export type cart = {
    id: string;
    owner: string;
    resources: [{ productId: string }];
};
