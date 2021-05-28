import { IWaiter } from "../../MODEL/INTERFACE/waiter-interface";
import { waiter_json, Waiter } from "../../MODEL/ENTITY/waiter-entity";
const WaiterRepository = require("../../REPOSITORY/REPOSITORY-MODEL/waiter.repository");

class WaiterController {
  private waiter: IWaiter = new WaiterRepository();

  public async GetAllWaiter(req: any, res: any) {
    const info: Array<waiter_json> = await this.waiter
      .GetAllWaiter({id_restaurant: req.query.restaurant})
      .then((data) => data);
    if (info.length > 0) {
      res.status(200).json(info);
    } else {
      res.status(404).json({ message: "Not info" });
    }
  }

  public async PostWaiter(req: any, res: any) {
    const data: Waiter = req.body.waiter;
    const add = await this.waiter
      .AddWaiter({
        name: data.name,
        number_mozo: data.number_mozo,
        id_restaurant: data.id_restaurant,
      })
      .catch(() => null);

    add
      ? res.status(200).json({ message: "Add Waiter" })
      : res.status(404).json({ message: "Not add waiter" });
  }

  public async PutWaiter(req: any, res: any) {
    const data: Waiter = req.body.waiter;
    const put = await this.waiter
      .UpdateWaiter({
        id: data.id,
        name: data.name
      })
      .catch(() => null);

    put
      ? res.status(200).json({ message: "Update Waiter" })
      : res.status(404).json({ message: "Not update waiter" });
  }

  public async DeleteWaiter(req: any, res: any) {
    const delet = await this.waiter
      .DeleteWaiter({ id: req.query.id_waiter })
      .catch(() => null);

    delet
      ? res.status(200).json({ message: "Delete Waiter" })
      : res.status(404).json({ message: "Not delete waiter" });
  }
}

module.exports = WaiterController;
