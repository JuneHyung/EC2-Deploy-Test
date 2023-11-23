const Sequelize = require('sequelize');

class User extends Sequelize.Model{
  static initiate(sequelize){
    User.init({
      email: {
        type: Sequelize.STRING(200),
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      authStatus: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      authToken: {
        type: Sequelize.STRING(45)
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }
}

module.exports = User;