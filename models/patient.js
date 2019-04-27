module.exports = (sequelize, DataTypes) => {
    var Patient = sequelize.define('Patient', {
          name_first: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
        }
      },
        name_last: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        }
      }
    });

    Patient.associate = models => {
      Patient.hasMany(models.Rx, {
        onDelete: "cascade"
      });
    };
  
    return Patient;
  };