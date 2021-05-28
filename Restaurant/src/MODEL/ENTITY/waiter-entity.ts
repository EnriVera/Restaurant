export interface waiter_json {
    id: string,
    name: string,
    number_mozo: number,
    tables: Array<any>
}

export interface Waiter {
    id?: string,
    name?: string,
    number_mozo?: number,
    id_restaurant?: string,
    count_tables?: string
}