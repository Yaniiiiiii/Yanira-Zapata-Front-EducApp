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

export const mockUsers = [
    {
        id: '1',
        name: 'Ana',
        email: 'ana@gmail.com',
        favorites: [mockResources[0]],
    },
    {
        id: '2',
        name: 'Julia',
        email: 'julia@gmail.com',
        favorites: [mockResources[0]],
    },
];

export const mockProtoResource: ProtoResource = {
    title: 'puzzle',
    subject: 'reading',
    grade: 'first',
};

export const mockUser = {
    id: '1',
    name: 'Ana',
    email: 'ana@gmail.com',
    role: 'Teacher',
    school: 'Peete',
    grade: 'first',
    favorites: mockResources[0],
    password: 'string',
    resources: [],
};

export const mockResource: Resource = {
    title: 'puzzle',
    subject: 'reading',
    grade: 'first',
    description: 'Math puzzle',
    pages: '3',
    price: 5,
    format: 'pdf',
    owner: mockUser.resources[0],
    id: '3',
};

export const userWithoutResource = [
    {
        id: '1',
        name: 'Ana',
        email: 'ana@gmail.com',
        favorites: [],
    },
];
