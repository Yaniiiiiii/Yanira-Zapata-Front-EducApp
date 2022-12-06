import {
    ProtoResource,
    Resource,
} from '../infrastructure/services/types/resources.types';

export const mockResources = [
    {
        id: '2',
        title: 'puzzle',
        subject: 'reading',
        grade: 'first',
    },
    {
        id: '3',
        title: 'puzzle',
        subject: 'reading',
        grade: 'first',
    },
];

export const mockProtoResource: ProtoResource = {
    title: 'puzzle',
    subject: 'reading',
    grade: 'first',
};

export const mockResource: Resource = {
    title: 'puzzle',
    subject: 'reading',
    grade: 'first',
    description: 'Math puzzle',
    pages: '3',
    price: 5,
    format: 'pdf',
    owner: 'Julia',
    id: '3',
};

export const mockUsers = [
    {
        id: '1',
        name: 'Ana',
        email: 'ana@gmail.com',
        favorites: [mockResource],
    },
    {
        id: '2',
        name: 'Julia',
        email: 'julia@gmail.com',
        favorites: [mockResource],
    },
];
export const userWithoutResource = [
    {
        id: '1',
        name: 'Ana',
        email: 'ana@gmail.com',
        favorites: [],
    },
];
