module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hashed_password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name_first: {
        type: DataTypes.STRING,
        nullable: true,
      },
      name_last: {
        type: DataTypes.STRING,
        nullable: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
      }
  
    });
  
    User.associate = models => {
      User.hasMany(models.Patient, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };