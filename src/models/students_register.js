/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students_register', {
    'ref': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'student_name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'school_name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'student_mobile': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'from_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'to_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'student_pic': {
      type: "BLOB",
      allowNull: true,
      comment: "null"
    },
    'reg_date': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'admission_no': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'student_class': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'school_district': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'dob': {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null"
    },
    'age': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'gender': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'student_status': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'Active',
      comment: "null"
    },
    'class_division': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'parent_name': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    },
    'parent_mobile1': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'parent_mobile2': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'parent_id': {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "null"
    },
    'parent_email': {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'students_register'
  });
};
