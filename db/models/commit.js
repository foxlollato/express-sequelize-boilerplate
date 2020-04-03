'use strict';

module.exports = (sequelize, DataTypes) => {
    const Commit = sequelize.define('Commit', {        
        hash: DataTypes.STRING
    }, {});

    Commit.associate = function(models) {
        
        Commit.belongsTo(models.User, {
            foreignKey: 'user_id'
        })
    };

    return Commit;
};