const {sequelize} = require("./sequelize");

import Tables from "../tables.repository";
import Addition from "../addition.repository";
import AdditionProduct from "../addition-product.repository";


function SequelizeInit() {
    sequelize.authenticate()
        .then(async () => {
            await Tables();
            setTimeout(async () => {
                await Addition();
                await AdditionProduct();
                await console.info('INFO - Database connected.')
            }, 5000)
        })
        .catch((err: any) => console.error('ERROR - Unable to connect to the database:', err))
}
export default SequelizeInit;