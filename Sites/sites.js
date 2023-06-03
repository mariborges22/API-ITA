const { Sequelize } = require("sequelize");
const connection=require("../database/database");

const Sites=connection.define('sites', {
    nome:Sequelize.STRING,
    link:Sequelize.CHAR,
    objetivo:Sequelize.STRING,
    criador:Sequelize.STRING,

})

Sites.sync({force:false})

module.exports=Sites;