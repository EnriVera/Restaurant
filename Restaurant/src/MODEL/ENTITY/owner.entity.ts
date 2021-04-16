import {Observable} from "rxjs";
import Restaurant from "./restaurant-entity"

type Owner = {
    id: Observable<string>,
    name: Observable<string>,
    email: Observable<string>,
    password: Observable<string>,
    restaurant: Array<Restaurant>
}

export default Owner;