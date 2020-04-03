'use strict';

const express    = require('express');
const router     = express.Router();
const models     = require('../db/models');
const throwError = require('../middlewares/error').throwError;
const sequelize = require('sequelize');

router.get('/', throwError(async function(req, res, next) {
    res.json(
        await models.Commit.findAll({            
            attributes: ['id', 'user_id', 'hash', 'createdAt']
        })
    );
}));

router.get('/metrics', throwError(async function(req, res, next) {
    res.json(
        await models.Commit.findAll({ 
            attributes: [[sequelize.fn('COUNT', sequelize.col('user_id')), 'Commits']],            
            include: [
                {
                    model: models.User,
                    attributes: [ 'firstName' ]
                }                
            ],
            group: [ 'user_id' ],
            order: sequelize.literal('Commits ASC'), 
        })
    );
}));

module.exports = router;