import Addition from "./addition-entity";
import Product from "./product-entity";
import {Observable} from "rxjs";

interface AdditionProduct {
    id: Observable<string>,
    count: Observable<number>,
    addition: Observable<Addition>,
    product: Observable<Product>
}

export default AdditionProduct;