export interface tables {
    id?: string,
    name_table?: string,
    count_chairs?: number,
    status?: string,
    id_restaurant?: string,
    id_waiter?: string,
    id_addition?: string
}
export interface tables_json {
    id: string,
    name_table: string,
    count_chairs: number,
    status: string,
    waiter: any,
}