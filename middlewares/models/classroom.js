'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define('Classroom', {
    class_name: DataTypes.STRING
  }, {});
  Classroom.associate = function(models) {
    // associations can be defined here
    Classroom.hasMany(models.Student, {
      foreignKey:"classroom_id",
      as: 'students',
      onDelete:"CASCADE"
    })
  };
  return Classroom;
};