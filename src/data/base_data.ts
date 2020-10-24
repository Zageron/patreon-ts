export interface ILinks
{
    self?: string;
    related?:
    {
        href: string;
        meta: object;
    };
}

export interface Cursors
{
    next: string;
}

export interface Pagination
{
    cursors?: Cursors;
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
}

type ExcludeMethods<T> =
    Pick<T, { [K in keyof T]: T[K] extends (_: any) => any ? never : K }[keyof T]>;
    
abstract class DTO<T> {
    public constructor(initializer: ExcludeMethods<T>) {
        Object.assign(this, initializer);
    }
}

export abstract class BaseType<T> extends DTO<T>
{
    links?: ILinks;
    included!: Array<any>; // currently untyped.
    meta?: IObject;
}
