import api from "../tools/common"
import jwt from 'jsonwebtoken';
import config from '../config/settings'
var salt = config.security.salt;

function authorization(req, res, next) {
    var token = req.headers['authorization'];

    var flag = true;
    if (token == null || token == '' || token == undefined) {
        flag = false;
        // flag = true;
    }
    if (flag) {
        jwt.verify(token, salt, function(err, decoded) {
            // body...
            if (err) {
                api.error(res, "Authorization Token consistency error", "401");
            } else {
                console.log("decoding json");
                jwt.decode(token);
                return next();
            }
        });
    } else {
        api.error(res, "Authorization Token not provided [authorization]", "401");
    }
}

module.exports = {
    authorization
}