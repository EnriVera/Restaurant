import { Waiter } from "../../MODEL/INTERFACE/waiter-interface"
import { waiter_json } from "../../MODEL/ENTITY/waiter-entity";
const WaiterRepository = require('../../REPOSITORY/REPOSITORY-MODEL/waiter.repository')

class WaiterController {
    private waiter: Waiter = new WaiterRepository()
    public async GetAllWaiter(req: any, res: any) {
        const info: Array<waiter_json> = await this.waiter.GetAllWaiter().then(data => data)
        if (info.length > 0) {
            res.status(200).json(info)
        } else {
            res.status(404).json({message: "Not info"})
        }
    }
}

module.exports = WaiterController