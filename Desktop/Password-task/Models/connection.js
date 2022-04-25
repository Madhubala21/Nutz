import { Sequelize, DataTypes } from 'sequelize';

 const connection=new Sequelize({
    host:'localhost',
    username:'root',
    password:'',
    dialect:"mysql",
    database:'form',
    logging:console.log,
    database:'madhu'
  })

  export{connection}