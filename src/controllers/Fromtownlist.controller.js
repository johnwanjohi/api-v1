import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
import config from '../config/settings';

function list(req, res) {
    // models.users.findAll( {attributes: {
    var inFind = api.genQueryParameters(req, [''], ["text"]);
    /*
    models.fromtownlist.findAll({
            attributes: {
                exclude: ['Password']
            },
            group: ["fromtown"]
        }) */
    models.fromtownlist.findAll(
        inFind
    ).then((data) => {
        // console.log(data)
        api.ok(res, data);
    }).catch((e) => {
        // console.log(req.body.password);
        api.error(res, 'Error ' + e, 500);
    });
    /*
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
        api.error(res, 'Wrong credentials', 500);
    });

    */
}

module.exports = {
    list
    /*,
    login,
    register,
    profile
    */

};