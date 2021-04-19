import {Observable} from "rxjs";
import Restaurant from "./restaurant-entity"

// Types
type Towner_json = {
    id: string,
    name: string,
    email: string,
    password: string,
    restaurant: Array<Restaurant>
};

type Towner_no_restaurant = {
    id: string,
    name: string,
    email: string,
    password: string,
};

type Towner_smtp = {
    name: string,
    email: string,
    password: string,
};

// entity

const owner_json: Towner_json = {
    id: "",
    name: "",
    email: "",
    password: "",
    restaurant: []
};
const owner_smtp: Towner_smtp = {
    name: "",
    email: "",
    password: ""
};

const owner_no_restaurant: Towner_no_restaurant = {
    id: "",
    name: "",
    email: "",
    password: ""
};

export default {owner_json, owner_smtp, owner_no_restaurant};