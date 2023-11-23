const Sequelize = require('sequelize');

class Token extends Sequelize.Model{
  static initiate(sequelize){
    Token.init({
      email: {
        type: Sequelize.STRING(200),
        primaryKey:true,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
    },{
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'Token',
      tableName: 'tokens',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }
}

module.exports = Token;

