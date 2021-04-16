import {Observable} from "rxjs";

interface Addition{
    Add_new_addition(): Observable<boolean>
}

export default Addition;