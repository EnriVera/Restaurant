const express = require("express");
const { sequelize } = require("../REPOSITORY/sequelize");

// repository
import Restaurant from "../REPOSITORY/restaurant.repository";
import Tables from "../REPOSITORY/tables.repository";
import Waiter from "../REPOSITORY/waiter.repository";
import Product from "../REPOSITORY/product.repository";
import Addition from "../REPOSITORY/addition.repository";
import AdditionProduct from "../REPOSITORY/addition-product.repository";

// init
const PORT = 4789;
const app = express();

sequelize.authenticate()
        .then( async () => {
            console.log('Conected');
            await Restaurant.sync({ force: true });
            await Waiter.sync({ force: true });
            await Tables.sync({ force: true });
            await Product.sync({ force: true });
            await Addition.sync({ force: true });
            await AdditionProduct.sync({ force: true });
        })
        .catch(console.error)

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://192.168.0.9:${PORT}`);
});