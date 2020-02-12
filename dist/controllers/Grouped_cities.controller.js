'use strict';

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _sequelize = require('../config/sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _common = require('../tools/common');

var _common2 = _interopRequireDefault(_common);

var _settings = require('../config/settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(req, res) {
  // models.users.findAll( {attributes: {
  _sequelize2.default.grouped_cities.findAll({
    attributes: {
      exclude: ['Password']
    }

  }).then(function (data) {
    console.log(data);
    _common2.default.ok(res, data);
  });
}
/*
function login(req, res, next){
  models.uccaduser.find({
    where : {
      Login : req.body.username,
      Password : req.body.password
    }
  }).then((userL) =>{
    var data = userL.dataValues;
    var theToken = jwt.sign({ IdUser : data.IdUser, username : data.Login}, config.security.salt, {expiresIn: 24 * 60 * 60});
    api.ok(res, {'token' : theToken});
  }).catch((e)=>{
    api.error(res, 'Wrong credentials', 500);
  });

  }
  
  function register(req, res, next) {
    models.user.build({
      nickname : req.body.nickname,
      name : req.body.name,
      lastname : req.body.lastname,
      phone : req.body.phone,
      email : req.body.email,
      password : req.body.password,
      role_id : req.body.role_id

    }).save().then(() =>{
      api.ok(res, null);
    }).catch(e =>{
      api.error(res, "Could not process your request", 500);
    });
  }
  function profile(req, res, next) {
    models.user.findById(
      req.params.id,
      {attributes: {
        exclude: ['password']
      }})
          .then((userL) =>{
            //var data = userL.dataValues;
            api.ok(userL)
          }).catch((e)=>{
            api.error(res, e, 500);
          });
  }
  */
module.exports = {
  list: list
  /*,
  login,
  register,
  profile
  */

};