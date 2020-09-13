import jwt from "jsonwebtoken";
import models from "../config/sequelize";
import api from "../tools/common";
import config from "../config/settings";
import md5 from "md5";

async function login(req, res, next) {
  var username, password = "";
  username = req.body.username;
  password = req.body.password;
  var countToaMillion = 0; // await countToaMillionx(1500);  
  var countagain = 0; // await countToaMillionx(2000);
  console.log("counting again" + countagain);
  if (username != undefined && password != undefined) {
    // console.dir(" =========Validating============ ");
    models.uccaduser.findOne({
        where: {
          Login: username,
          Password: md5(password), ///req.body.password
          status: "active",
        },
        attributes: {
            exclude: ['Password'] //['openbookingid ', 'totown', 'fromtown']
        }
      }) .then((userL) => {
        console.dir(userL);
        if (userL){
          var data = userL.dataValues;  
          let tokenUserDet ={
              IdUser: data.IdUser,
              username: data.Login,
              realnames: data.Nome,
              IdUser: data.IdUser,
            };        
          var theToken = jwt.sign(
            tokenUserDet,
            config.security.salt, {
              expiresIn: 1000 * 60
            }            
          );
          var refreshToken = jwt.sign(
            tokenUserDet, 
            config.security.salt, {
              expiresIn: 1000 * 60 * 30
            }
            );
          const response = {
            "status": "Logged in",
            "token": theToken,
            "refreshToken": refreshToken,
          };
          // tokenList[refreshToken] = response;
          // let sess = req.session; 
          req.session.sessionID = theToken;
          req.session.user = data;
          req.session.user.userid = data.IdUser;
          api.ok(res, {
            token: theToken,
            refreshtoken: refreshToken,
            userdetails: data,
            sessionid: theToken
          });
        }
        if (!userL){
          api.error(res, `Wrong credentials or that user name (${username}) does'nt exist or is disabled ` , 500);
        }        
      })     
  } else {
    api.error(res, "User Name and Password are required ", 500);
  }
}

function countToaMillionx(count) {
  return 0;
  var i = 0;
  console.log("started counting " + count);
  while (i < count) {
    i++;
  }
  return i;
}

function list(req, res) {
  var inFind = api.genQueryParameters(req, ['Password']);
  models.uccaduser
    .findAll(
      inFind
    )
    .then((data) => {
      
      api.ok(res, data);
    });
}

function register(req, res, next) {
  models.user
    .build({
      nickname: req.body.nickname,
      name: req.body.name,
      lastname: req.body.lastname,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
      role_id: req.body.role_id,
    })
    .save()
    .then(() => {
      api.ok(res, null);
    })
    .catch((e) => {
      api.error(res, "Could not process your request", 500);
    });
}

function profile(req, res, next) {
  models.user
    .findById(req.params.id, {
      attributes: {
        exclude: ["password"],
      },
    })
    .then((userL) => {
      //var data = userL.dataValues;
      api.ok(userL);
    })
    .catch((e) => {
      api.error(res, e, 500);
    });
}

function logout(req, res) {
  console.log(`deleting session loging out`)
  // if (req.session.user && req.cookies.user_sid) {
  if (req.session) {
    req.session.destroy((err) => {
      console.log(`session destroyed`);
      // res.redirect('/') // will always fire after session is destroyed
    });
    // res.clearCookie('user_sid');
    // res.redirect('/');
    console.dir(req.session);
    api.ok(res, {
      // loggedout: req.session
      loggedout: true
    });
    // api.ok(userL);
  } else {
    api.ok(res, {
      loggedout: true
    });
    // res.redirect('/login');
  }
}

module.exports = {
  list,
  login,
  logout,
  register,
  profile,
};