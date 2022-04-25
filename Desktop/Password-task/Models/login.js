import { Sequelize, DataTypes } from 'sequelize';
import { connection } from "./connection.js"

var Value = connection.define("First", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    const Insert=async (req, res) => {
        const InsertAllUsers= await Value.create({
          Name: req.body.Name,
          Password: req.body.Password });
        res.json(InsertAllUsers);
    }

    Value.beforeCreate(function(user, options) {
        return cryptPassword(user.password)
          .then(success => {
            user.password = success;
          })
          .catch(err => {
            if (err) console.log(err);
          });
      });
    
    function cryptPassword(password) {
      console.log("cryptPassword" + password);
      return new Promise(function(resolve, reject) {
        bcrypt.genSalt(10, function(err, salt) {
          // Encrypt password using bycrpt module
          if (err) return reject(err);
    
          bcrypt.hash(password, salt, null, function(err, hash) {
            if (err) return reject(err);
            return resolve(hash);
          });
        });
      });
    }
    export{Value}
    export{Insert}