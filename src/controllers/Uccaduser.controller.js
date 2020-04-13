import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
import config from '../config/settings';

import md5 from 'md5';
// var md5 = require('md5');

function login(req, res, next) {
    // password: crypto.createHash('md5').update(password).digest("hex")

    // console.log(crypto.createHash('md5').update(req.body.password).digest("hex"));
    console.log(md5(req.body.password));
    // return(next);

    models.uccaduser.findOne({
        where: {
            Login: req.body.username,
            Password: md5(req.body.password), ///req.body.password
            statuus: 'active'
        }
    }).then((userL) => {
        var data = userL.dataValues;
        var theToken = jwt.sign({ IdUser: data.IdUser, username: data.Login, realnames: data.Nome }, config.security.salt, { expiresIn: 24 * 60 * 60 });
        console.log("sallllllllllllaaaaallllllt====>>>" + jwt.decode(theToken));
        console.dir(jwt.decode(theToken));

        console.log("sallllllllllllaaaaallllllt====>>>" + jwt.decode(theToken).realnames);
        api.ok(res, { 'token': theToken });
    }).catch((e) => {
        // console.log(req.body.password);
        api.error(res, 'Wrong credentials ' + e, 500);
    });


}

function list(req, res) {
    models.uccaduser.findAll({
            attributes: {
                exclude: ['Password']
            }
        })
        .then((data) => {
            console.log(data)
            api.ok(res, data);
        });
}

function register(req, res, next) {
    models.user.build({
        nickname: req.body.nickname,
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        role_id: req.body.role_id

    }).save().then(() => {
        api.ok(res, null);
    }).catch(e => {
        api.error(res, "Could not process your request", 500);
    });
}

function profile(req, res, next) {
    models.user.findById(
            req.params.id, {
                attributes: {
                    exclude: ['password']
                }
            })
        .then((userL) => {
            //var data = userL.dataValues;
            api.ok(userL)
        }).catch((e) => {
            api.error(res, e, 500);
        });
}
module.exports = {
    list,
    login,
    register,
    profile
};