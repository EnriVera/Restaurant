const express = require("express");
// const { sequelize } = require("../REPOSITORY/sequelize");
const PORT = 4789;
const app = express();


// sequelize.authenticate()
//         .then(() => console.log('Conected'))
//         .catch(console.error)

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://192.168.0.9:${PORT}`);
});