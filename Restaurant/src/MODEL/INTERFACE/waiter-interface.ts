import { waiter_json } from './../ENTITY/waiter-entity';
export interface Waiter {
    GetAllWaiter(): Promise<Array<waiter_json>>
}