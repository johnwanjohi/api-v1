import jwt from 'jsonwebtoken';
import models from '../config/sequelize';
import api from '../tools/common';
import config from '../config/settings';

function list(req, res) {
    console.dir("from town listing ", req.query);
    // models.users.findAll( {attributes: {
    var queryParameters = api.genQueryParameters(req, [''], ['text']);
    models.totownlist.findAll(
            queryParameters
        )
        .then((data) => {
            // console.log('finding all' + req.query.fromtown);
            // console.log(data)
            api.ok(res, data);
        }).catch((e) => {
            // console.log(req.body.password);
            api.error(res, 'Error ' + e, 500);
        });
}
/*
function login(req, res, next){
  models.users.find({
    where : {
      email : req.body.email,
      password : req.body.password
    }
  }).then((userL) =>{
    var data = userL.dataValues;
    var theToken = jwt.sign({ user : data.id, email : data.email}, config.security.salt, {expiresIn: 24 * 60 * 60});
    api.ok(res, {'token' : theToken});
  }).catch((e)=>{
    api.error(res, 'Wrong credentials', 500);
  });

}
*/
module.exports = {
    list
    /*,
    login,
    register,
    profile
    */

};