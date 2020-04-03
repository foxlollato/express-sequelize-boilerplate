'use strict';

const express    = require('express');
const router     = express.Router();
const models     = require('../db/models');
const throwError = require('../middlewares/error').throwError;
const sequelize = require('sequelize');

/**
 * @swagger
 * /api/v1.0/commits:
 *    get:
 *      tags:
 *          - Commits
 *      summary: Return all commits.
 *      description: Nothing special.
 *      responses:
 *        200:
 *          description: Returns all commits and its attributes in json format.
 */

router.get('/', throwError(async function(req, res, next) {
    res.json(
        await models.Commit.findAll({            
            attributes: ['id', 'user_id', 'hash', 'createdAt']
        })
    );
}));

/**
 * @swagger
 * /api/v1.0/commits/metrics:
 *    get:
 *      tags:
 *          - Commits
 *      summary: Commits by user.
 *      description: Nothing special.
 *      responses:
 *        200:
 *          description: Returns amount of commits of each user in json format.
 */
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