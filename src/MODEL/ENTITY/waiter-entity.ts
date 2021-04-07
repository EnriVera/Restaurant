import Tables from "./tables-entity";
import {Observable} from "rxjs";

interface Waiter {
    id: Observable<string>,
    name: Observable<string>,
    number_mozo: Observable<number>,
    tables: Array<Tables>
}

export default Waiter;