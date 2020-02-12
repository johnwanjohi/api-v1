'use strict';

var _common = require('../tools/common');

var _common2 = _interopRequireDefault(_common);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _settings = require('../config/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var salt = _settings2.default.security.salt;

function authorization(req, res, next) {
    var token = req.headers['authorization'];
    var flag = true;
    if (token == null || token == '') {
        flag = false;
        // flag = true;
    }
    if (flag) {
        _jsonwebtoken2.default.verify(token, salt, function (err, decoded) {
            // body...
            if (err) {
                _common2.default.error(res, "Authorization Token consistency error", "401");
            } else {
                console.log("decoding json");
                _jsonwebtoken2.default.decode(token);
                return next();
            }
        });
    } else {
        _common2.default.error(res, "Authorization Token not provided", "401");
    }
}

module.exports = {
    authorization: authorization
};