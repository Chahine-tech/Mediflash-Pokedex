
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Pokemon {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export abstract class IQuery {
    abstract pokemon(offset?: Nullable<number>, limit?: Nullable<number>): Nullable<Nullable<Pokemon>[]> | Promise<Nullable<Nullable<Pokemon>[]>>;
}

type Nullable<T> = T | null;
