import api from "../tools/common";
import jwt from "jsonwebtoken";
import config from "../config/settings";
import db from "../config/sequelize";

var salt = config.security.salt;

async function validateUser(IdUser) {
  const sequelize = db.sequelize;
  console.log("validating user " + IdUser);
  const validateUser = await sequelize.query(
    `select count(*)  as valid from uccaduser where IdUser = '${IdUser}' and  status= 'active'`, {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  let valid = validateUser[0].valid;
  let isValid = false;
  if (valid == 1) {
    isValid = true;
  }
  return isValid;
}
async function authorization(req, res, next) {
  // var token = req.session.token; // req.headers['authorization'];
  // console.dir(req);
  var token = req.headers['apitoken']; //req.headers['authorization'];
  var apitoken = req.headers['apitoken'];
  // var mysessionid = req.session.mysessionid;
  var isUserValid = false; //  await validateUser(uuuu);
  //console.log("getting session id====>> " + req.session.id);
  console.log("api token from headers ====>> " + apitoken);
  console.log("PRINTOUT SESSION");
  // console.dir(req.session);
  console.log("END PRINTOUT SESSION");
  console.log("decoding json");
  // console.log(jwt.decode(apitoken));
  let jwtUser = jwt.decode(apitoken);
  console.log("end decoding json");
  // console.log(token + " ===authorized==> apitoken==>> " + apitoken);
  var flag = true;
  if (token == null || token == "" || token == undefined) {
    flag = false; // flag = true;    
  }
  if (jwtUser) {
    isUserValid = await validateUser(jwtUser.IdUser);
  }
  console.log("is user valid ====> " + isUserValid);
  flag = isUserValid;
  if (flag) {
    jwt.verify(token, salt, function (err, decoded) {
      // body...
      if (err) {
        api.error(res, "Authorization Token consistency error", "401");
      } else {
        // console.log("decoding json");
        //  console.log(jwt.decode(token));
        return next();
      }
    });
  }
  if (!flag) {
    api.error(res, "Authorization Token not provided [authorization]", "401");
  }
}

module.exports = {
  authorization,
};