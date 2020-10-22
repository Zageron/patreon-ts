export interface ILinks
{
    self?: string;
    related?:
    {
        href: string;
        meta: object;
    };
}

export interface Pagination
{
    total: number;
}

export interface Meta
{
    pagination: Pagination;
}

export interface IObject
{
    [key: string]: any;
}

export interface IData
{
    id?: string;
    type?: string;
    meta?: IObject;
}

export abstract class BaseType
{
    links?: ILinks;
}
