const Sequelize=require("sequelize");
const connection=require("../database/database");

const Comunidades=connection.define('comunidades', {
   redesocial:{
    type:Sequelize.STRING,
    allowNull:false
   },
   site:{
    type:Sequelize.CHAR,
    allowNull:true
   },
   membros:{
    type:Sequelize.INTEGER,
    allowNull:true
   },
   focada:{
    type:Sequelize.BOOLEAN,
    allowNull:false
   },
   moderadores:{
    type:Sequelize.TEXT,
    allowNull:true
   }

})

Comunidades.sync({force:true})

module.exports=Comunidades;