'use strict';

const express    = require('express');
const router     = express.Router();
const throwError = require('../middlewares/error').throwError;

router.get('/', throwError(function(req, res, next) {
    res.render('chart', { title: 'ChartJS' });
}));

module.exports = router;
