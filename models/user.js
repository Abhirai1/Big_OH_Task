// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      uniqueId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.BIGINT,
      isGraduate: DataTypes.BOOLEAN,
    },
    {}
  );
  return User;
};
