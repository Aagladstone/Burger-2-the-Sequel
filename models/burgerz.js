

module.exports = function(sequelize, DataTypes) {
    var Burgerz = sequelize.define("Burgerz", {
      text: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return Burgerz;
  };