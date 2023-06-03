const Sequelize=require("sequelize")
const connection=require("../database/database");
const Cursinho=connection.define('cursinho', {
    nome:Sequelize.STRING,
    localização:Sequelize.STRING,
    capacidade:Sequelize.INTEGER,
    mediaaprovados:Sequelize.INTEGER,
    modalidades:Sequelize.STRING

})

Cursinho.sync({force:false})

module.exports=Cursinho;