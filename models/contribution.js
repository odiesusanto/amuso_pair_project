'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contribution = sequelize.define('Contribution', {
    FanId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER,
    contribution_amount: DataTypes.INTEGER
  }, {});
  Contribution.associate = function(models) {
    // associations can be defined here
    Contribution.belongsTo(models.Fan);
    Contribution.belongsTo(models.Project);
  };
  return Contribution;
};