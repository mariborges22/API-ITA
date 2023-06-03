const Sequelize=require("sequelize");
const connection=require("../database/database");
const Canais=connection.define('canais', {
    nome:Sequelize.STRING,
    foco:Sequelize.STRING,
    criador:Sequelize.STRING,
    inscritos:Sequelize.FLOAT,
    bom:Sequelize.BOOLEAN

    
})

Canais.sync({force:false});

module.exports=Canais;