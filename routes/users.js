'use strict';

const express    = require('express');
const router     = express.Router();
const models     = require('../db/models');
const throwError = require('../middlewares/error').throwError;

/**
 * @swagger
 * /api/v1.0/users:
 *    get:
 *      tags:
 *          - Users
 *      summary: All users info.
 *      description: Nothing special.
 *      responses:
 *        200:
 *          description: Returns all users and it's attributes in json format.
 */

router.get('/', throwError(async function(req, res, next) {
    res.json(
        await models.User.findAll()
    );
}));


/**
 * @swagger
 * /api/v1.0/users/{id}:
 *    get:
 *      tags:
 *          - Users
 *      summary: Specific user info.
 *      description: Nothing special.
 *      parameters:
 *        - name: id
 *          in: path
 *          type: integer
 *          required: true
 *          description: Numeric ID of the user to get.     
 *      responses:
 *        200:
 *          description: Returns all data of a user identified by it id in json format.
 */
router.get('/:id', throwError(async function(req, res, next) {
    const { id }  = req.params;
    const userExists = await models.User.findOne({
        where: {id: id}
    })

    if(!userExists){
        res
        .status(400)
        .json({
            error: `User with ID ${id} not found.`
        });
    }else{
        res.json(        
            await models.User
            .findOne({
                where: {id: id}
            })
        );
    }

    
}));

module.exports = router;