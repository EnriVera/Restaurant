import Restaurant from "./restaurant-entity";
import Waiter from "./waiter-entity";
import Addition from "./addition-entity"
import {Observable} from "rxjs";

interface Tables {
    id: Observable<string>,
    name_table: Observable<string>,
    restaurant: Observable<Restaurant>,
    waiter: Observable<Waiter>,
    addition: Array<Addition>
}


export default Tables;