const {sequelize} = require("./sequelize");

import Restaurant from "../restaurant.repository";
import Waiter from "../waiter.repository";
import Product from "../product.repository";
import Owner from "../owner.repository";


function SequelizeInit() {
    sequelize.authenticate()
    .then( async () => {
        try{
            await Owner();
            await Restaurant();
            await Waiter();
            await Product();
            await console.info('INFO - Database connected.');
        }
        catch (err){
            console.log('INFO - Previously created database')
        }
    })
    .catch((err: any) => console.error('ERROR - Unable to connect to the database:', err))
}
export default SequelizeInit;