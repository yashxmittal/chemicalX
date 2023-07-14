const { DataTypes } = require('sequelize');
const sequelize = require('../utils/dbConnection');

const chemical = {
    id :{
        type: DataTypes.STRING,
        primaryKey : true
    },
    name : {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT,
    },
    image: {
        type: DataTypes.STRING
    },
    link : {
        type: DataTypes.STRING
    },
    dateModified : {
        type: DataTypes.DATE,
    }
}

const chemicalModel = sequelize.define('chemical',chemical,{ timestamps : false});

module.exports = chemicalModel