import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
import config from '../config/settings';
// const querystringConverter = require('sequelize-querystring-converter');
function list(req, res) {
    // models.users.findAll( {attributes: {
    models.grouped_cities.findAll({
            attributes: {
                exclude: ['Password']
            }
        })
        .then((data) => {
            // console.log(data)
            api.ok(res, data);
        }).catch((e) => {
            // console.log(req.body.password);
            api.error(res, 'Error', 500);
        });
}

function fromtotown(req, res) {
    // models.users.findAll( {attributes: {
    var inFind = api.genQueryParameters(req, [''], ['fromtown']);
    models.grouped_cities.findAll(
            inFind
        )
        .then((data) => {
            // console.log(data)
            api.ok(res, data);
        }).catch((e) => {
            // console.log(req.body.password);
            api.error(res, 'Error', 500);
        });
}

function fromtotowndate(req, res) {

    console.log('=======================getting from town date start');
    ///criteria.push(" 'attributes': { exclude: ['openbookingid', 'totown'] } ");
    // console.dir(criteria);
    // console.log('=======================getting from town date end');
    // 
    var inFind = api.genQueryParameter(req, ['']);
    models.grouped_cities.findAll(
            inFind
        )
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
    fromtotown,
    fromtotowndate
};