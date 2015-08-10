/**
 * Created by todd.kim on 15-08-02.
 */
//add express & external modules
var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    body_parser = require('body-parser'),
    file_stream_rotator = require('file-stream-rotator'),
    morgan = require('morgan'),
    consolidate = require('consolidate');

//add custom modules
require('app-module-path').addPath(__dirname + '/');
var route_index = require('controllers/index');

var app = express();
var log_path = __dirname + '/logs';
fs.existsSync(log_path) || fs.mkdirSync(log_path);

var logger = morgan('combined', {
    stream : file_stream_rotator.getStream({
        filename: log_path + '/access-%DATE%.log',
        frequency: 'daily',
        verbose: false
    }),
    skip : function (req, res) { return res.statusCode < 400; }
});

//setting config
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.engine('.html', consolidate.swig);
app.use('/views', express.static(__dirname + '/views'));
app.use('/resources', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/components', express.static(__dirname + '/public/bower_components'));
app.use(body_parser.json());
app.use(logger);

//mapping
app.get('/', route_index.index);

app.listen(app.get('port'));