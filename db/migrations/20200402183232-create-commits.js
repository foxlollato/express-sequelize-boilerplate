'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('commits', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hash: {
                type: Sequelize.STRING
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' },
                onUpdate:  'CASCADE',
                onDelete: 'CASCADE',
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('commits');
    }
};