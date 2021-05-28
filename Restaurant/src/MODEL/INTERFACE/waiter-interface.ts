import { waiter_json, Waiter } from './../ENTITY/waiter-entity';
export interface IWaiter {
    // GetAllWaiterForTable(waiter: Waiter): Promise<Array<waiter_json>>
    GetAllWaiter(waiter: Waiter): Promise<Array<waiter_json>>
    AddWaiter(waiter: Waiter): Promise<Boolean>
    UpdateWaiter(waiter: Waiter): Promise<Boolean>
    DeleteWaiter(waiter: Waiter): Promise<Boolean>
}