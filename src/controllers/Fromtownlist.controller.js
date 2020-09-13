import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
import config from '../config/settings';

function list(req, res) {
    var inFind = api.genQueryParameters(req, [''], ["text"]);
    models.fromtownlist.findAll(
        inFind
    ).then((data) => {
        api.ok(res, data);
    }).catch((e) => {
        api.error(res, 'Error ' + e, 500);
    });
}

module.exports = {
    list
};