export type ProtoResource = {
    title?: string;
    subject?: Subject;
    grade?: Grade;
    description?: string;
    pages?: string;
    price?: number;
    format?: string;
    owner?: string;
};

export type Resource = {
    title: string;
    subject: Subject;
    grade: Grade;
    description: string;
    pages: string;
    price?: number;
    format: string;
    owner: string;
    id: string;
};

export type Subject =
    | 'math'
    | 'reading'
    | 'science'
    | 'writing'
    | 'pe'
    | 'arts';

export type Grade =
    | 'kinder'
    | 'first'
    | 'second'
    | 'third'
    | 'fourth'
    | 'fifth'
    | 'sixth';
