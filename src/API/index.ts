const express = require("express");
const { sequelize } = require("../REPOSITORY/sequelize");

// repository
const Restaurant = require("../REPOSITORY/restaurant.repository")
const Tables = require("../REPOSITORY/tables.repository")
const Waiter = require("../REPOSITORY/waiter.repository")
const Product = require("../REPOSITORY/product.repository")
const Addition = require("../REPOSITORY/addition.repository")
const AdditionProduct = require("../REPOSITORY/addition-product.repository")

// init
const PORT = 4789;
const app = express();


sequelize.authenticate()
        .then( async () => {
            console.log('Conected');
            await Restaurant(sequelize);
            await Tables(sequelize);
            await Waiter(sequelize);
            await Product(sequelize);
            await Addition(sequelize);
            await AdditionProduct(sequelize);
        })
        .catch(console.error)

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://192.168.0.9:${PORT}`);
});