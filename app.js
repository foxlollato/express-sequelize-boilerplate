'use strict';

/*
    dependencies
*/
const createError  = require('http-errors');
const express      = require("express");
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const error        = require('./middlewares/error');
const debug        = require('debug')('app:app');
const config       = require('./config');
const favicon      = require('serve-favicon');
const cors         = require('cors');


/*
    routes
*/
const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard');
const usersRouter = require('./routes/users');
const commitsRouter = require('./routes/commits');
const swaggerRouter = require('./routes/swagger');


/*
    app setup
*/
const app = express();

// set global config to be used latter on
app.set('config', config);
if (config.isDev) {
    debug('config: ', app.get('config'));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//cors enable
app.use(cors());

// middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/api/v1.0/users', usersRouter);
app.use('/api/v1.0/commits', commitsRouter);

//swagger
app.use('/swagger', swaggerRouter)


//serve static files for JS and CSS
app.use('/js', express.static('src'));
app.use('/css', express.static('styles'));

//serve favicon
app.use(favicon(__dirname + '/views/favicon.ico'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(createError.NotFound));
});

// error handler
app.use(error.handleError);


module.exports = app;