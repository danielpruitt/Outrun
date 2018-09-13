module.exports = function (sequelize, DataTypes) {
    var Beer = sequelize.define("Beer", {
        beerName: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        type: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        flavors: {
            type:DataTypes.STRING, 
            allowNull: false,
            validate : {
                len: [1]
            }
        },
        
        
    });

    return Beer;
};