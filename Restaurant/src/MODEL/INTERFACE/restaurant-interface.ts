import {
  FullRestaurant,
  Restaurant,
} from "../ENTITY/restaurant-entity";
export interface IRestaurant {
  NewRestaurant(restaurante: Restaurant): any;
  GetAllRestaurant(restaurante: Restaurant): FullRestaurant | any;
}
