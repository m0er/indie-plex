/**
 * Created by todd.kim on 15-08-04.
 */
exports.index = function (req, res) {
    res.render('../views/index', {'main_title' : 'TEAM-PLEX', 'service_title' : 'INDIE-PLEX'});
};