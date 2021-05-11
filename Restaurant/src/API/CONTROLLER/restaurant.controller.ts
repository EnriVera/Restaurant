import { IRestaurant } from "../../MODEL/INTERFACE/restaurant-interface";
import { Restaurant, FullRestaurant } from "../../MODEL/ENTITY/restaurant-entity";
import RestaurantRepository from "../../REPOSITORY/REPOSITORY-MODEL/restaurant.repository";
import { owner as ow } from "../../MODEL/ENTITY/owner.entity"

class RestaurantController {
  private restaurant: IRestaurant = new RestaurantRepository();

  public PostRestaurant(req: any, res: any) {
    const owner: ow = req.user
    const body: Restaurant = req.body.restaurant;
    const response = this.restaurant.NewRestaurant({
      name: body.name,
      id_owner: owner.id,
    });

    if (response.status) {
      this.restaurant.GetAllRestaurant({id_owner: owner.id})
      res.status(301)
      res.json(response.message);
    }
    else {
      res.status(404)
      res.json(response.message);
    }
  }
  public async GetAllRestaurant(req: any, res: any) {
    const owner: ow = req.user
    try{
      await this.restaurant.GetAllRestaurant({id_owner: owner.id})
            .then((full: FullRestaurant) => res.status(200).json({restaurant: full}))
            .catch((err: any) => res.status(202).json({message: err}))
    }catch(e){
      res.status(404).json({message: "Error"})
    }
  }
  public PutRestaurant(req: any, res: any) {}
  public DeleteOneRestaurant(req: any, res: any) {}
}

export default RestaurantController;
