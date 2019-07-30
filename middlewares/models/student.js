'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    classroom_id: DataTypes.INTEGER,
    student_name: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsTo(models.Classroom);
    Student.belongsToMany(models.Course, {
      through:"StudentCourse",
      as:"courses",
      foreignKey:"matric_no"
    });
  };
  return Student;
};