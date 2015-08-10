/**
 * Created by todd.kim on 15-08-04.
 */
var fs = require('fs');
exports.read = function (path, callback) {
    fs.readFile(path, function (err, data) {
        if(err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch(exception) {
            callback(exception);
        }
    });
};