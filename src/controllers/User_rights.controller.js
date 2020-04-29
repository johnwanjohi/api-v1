import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';

function listalluserrights(req, res) {

    var queryParameters = api.genQueryParameters(req, ['']);
    models.user_rights.findAll(
            queryParameters
        )
        .then((data) => {

            api.ok(res, data);
        }).catch((e) => {

            api.error(res, 'Error ' + e, 500);
        });

}

module.exports = {
    listalluserrights
};