import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
import config from '../config/settings';

function list(req, res) {

    models.cities_scheduled.findAll({
            attributes: {
                exclude: ['Password']
            }
        })
        .then((data) => {

            api.ok(res, data);
        }).catch((e) => {

            api.error(res, 'Error ' + e, 500);
        });
}

function scheduledroutes(req, res) {

    var inFind = api.genQueryParameters(req, [''], ['openbookingid', 'fromtown', 'totown']);
    models.cities_scheduled.findAll(inFind)
        .then((data) => {

            api.ok(res, data);
        }).catch((e) => {

            api.error(res, 'Error ' + e, 500);
        });
}

function fromtotowns(req, res) {
    // models.users.findAll( {attributes: {
    var inFind = api.genQueryParameters(req, [''], ['fromtown', 'totown']);
    models.fromtotowns.findAll(inFind)
        .then((data) => {
            // console.log(data)
            api.ok(res, data);
        }).catch((e) => {
            // console.log(req.body.password);
            api.error(res, 'Error ' + e, 500);
        });
}

module.exports = {
    list,
    scheduledroutes,
    fromtotowns
};