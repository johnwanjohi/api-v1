import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';

function list(req, res) {
    var queryParameters = api.genQueryParameters(req, ['']);
    models.nationality.findAll(
            queryParameters
        )
        .then((data) => {
            api.ok(res, data);
        }).catch((e) => {
            api.error(res, 'Error ' + e, 500);
        });

}
module.exports = {
    list
};