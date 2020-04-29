import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
import config from '../config/settings';

import md5 from 'md5';
// var md5 = require('md5');
/*
async function printFiles () {
  const files = await getFilePaths();

  for (const file of files) {
    const contents = await fs.readFile(file, 'utf8');
    console.log(contents);
  }
}
*/
async function login(req, res, next) {
    // password: crypto.createHash('md5').update(password).digest("hex")
    // console.log(crypto.createHash('md5').update(req.body.password).digest("hex"));
    // console.log(md5(req.body.password));
    // console.dir(req.body);
    // return(next);
    var username, password = '';
    username = req.body.username;
    password = req.body.password;
    // var docLogEs6 = () => { console.log(document); };
    var countToaMillion = await countToaMillionx(1500);
    console.log("finished counting " + countToaMillion);
    console.log("proceded after counting " + countToaMillion);
    var countagain = await countToaMillionx(2000);
    console.log("counting again" + countagain);

    if (username != undefined && password != undefined) {
        // console.dir(" =========Validating============ ");
        models.uccaduser.findOne({
            where: {
                Login: username,
                Password: md5(password), ///req.body.password
                status: 'active'
            }
        }).then((userL) => {
            console.log('found user');
            var data = userL.dataValues;
            var theToken = jwt.sign({
                IdUser: data.IdUser,
                username: data.Login,
                realnames: data.Nome,
                IdUser: data.IdUser
            }, config.security.salt, { expiresIn: 24 * 60 * 60 });
            // console.log("sallllllllllllaaaaallllllt====>>>" + jwt.decode(theToken));
            // console.dir(jwt.decode(theToken));
            // console.log("sallllllllllllaaaaallllllt====>>>" + jwt.decode(theToken).realnames);
            api.ok(res, { 'token': theToken });
        }).catch((e) => {
            // console.log(req.body.password);
            api.error(res, 'Wrong credentials ' + e, 500);
        });
    } else {
        api.error(res, 'User Name and Password are required ', 500);
    }
}

function countToaMillionx(count) {
    var i = 0;
    console.log("started counting " + count);
    while (i < count) {
        i++;
    }
    return i;
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