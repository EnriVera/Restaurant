const {sequelize} = require("./sequelize");

import Restaurant from "../restaurant.DTO";
import Waiter from "../waiter.DTO";
import Product from "../product.DTO";
import Owner from "../owner.DTO";


function SequelizeInit() {
    sequelize.authenticate()
        .then(async () => {
            await console.info('INFO - Database connected.');
            await Owner();
            setTimeout(async () => {
                await Restaurant();
                await Waiter();
                await Product();
            }, 5000)
        })
        .catch((err: any) => console.error('ERROR - Unable to connect to the database:', err))
}
export default SequelizeInit;