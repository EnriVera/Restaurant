import {Observable} from "rxjs";
import Restaurant from "./restaurant-entity"

// Types
type Towner_json = {
    id: string,
    name: string,
    email: string,
    password: string,
    logo: string,
    googleID: string,
    googleVerified: boolean,
    restaurant: Array<Restaurant>
};

type Towner_no_restaurant = {
    id: string,
    name: string,
    email: string,
    password: string,
    logo: string,
    googleID: string,
    googleVerified: boolean
};

type Towner_smtp = {
    name: string,
    email: string,
    password: string,
};

type Tgoogle = {
    id: string,
    displayName: string,
    email: string,
    verified: boolean,
    photo: string
};

// entity

const owner_json: Towner_json = {
    id: "",
    name: "",
    email: "",
    password: "",
    logo: "",
    googleID: "",
    googleVerified: false,
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
    password: "",
    logo: "",
    googleID: "",
    googleVerified: false
};

const google: Tgoogle = {
    id: "",
    displayName: "",
    email: "",
    verified: false,
    photo: ""
}

export default {owner_json, owner_smtp, owner_no_restaurant, google};