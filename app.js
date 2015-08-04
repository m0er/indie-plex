/**
 * Created by todd.kim on 15-08-02.
 */
//add express & external modules
var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var file_stream_rotator = require('file-stream-rotator');
var morgan = require('morgan');

//add custom modules
require('app-module-path').addPath(__dirname + '/');
var route_index = require('controllers/index');
var utils = require('helpers/utils');

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
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(logger);

//mapping
app.get('/', route_index.index);

app.listen(app.get('port'));