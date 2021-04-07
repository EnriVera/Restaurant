import {Observable} from "rxjs";

interface Product {
    id: Observable<string>,
    title: Observable<string>,
    description: Observable<string>,
    type_plate_drink: Observable<string>,
    percentage_sale: Observable<number>,
    price: Observable<number>
}

export default Product;