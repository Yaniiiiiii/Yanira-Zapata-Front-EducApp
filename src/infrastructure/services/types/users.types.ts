export type ProtoUser = {
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    school?: string;
    grade?: string;
    resources?: Array<string>;
    favorites?: Array<string>;
    carts?: Array<string>;
};

export type User = {
    name: string;
    email: string;
    password: string;
    role: string;
    school: string;
    grade: string;
    resources: Array<string>;
    favorites: Array<string>;
    carts?: Array<string>;
    id: string;
};

export type cart = {
    id: string;
    owner: string;
    resources: [{ productId: string }];
};
