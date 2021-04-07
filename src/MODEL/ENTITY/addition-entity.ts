import Tables from "./tables-entity";
import AdditionProduct from "./addition-product-entity";
import {Observable} from "rxjs";

interface Addition {
    id: Observable<string>,
    data: Observable<Date>,
    status: Observable<string>,
    total: Observable<number>,
    table: Observable<Tables>,
    addition_product: Array<AdditionProduct>,
}

export default Addition;
