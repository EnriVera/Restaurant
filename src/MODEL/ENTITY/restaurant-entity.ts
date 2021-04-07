import Tables from "./tables-entity";
import {Observable} from "rxjs";

interface Restaurant {
    id: Observable<string>;
    name: Observable<string>;
    tables: Array<Tables>
}

export default Restaurant;