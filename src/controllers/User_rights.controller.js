import models from '../config/sequelize';
import api from '../tools/common';
import db from "../config/sequelize";

function listUserRights(req, res) {
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
async function getUserRight(IdUser, rightName) {
  const sequelize = db.sequelize;
  console.log(`getting user right - ${rightName} - ${IdUser}`);
  const userRight = await sequelize.query(
    `select ${rightName}  as right from user_right where user_ref = '${IdUser}' `, {
      type: sequelize.QueryTypes.SELECT,
    }
  );
  let rightStatus = userRight[0].right;
  let right = false;
  if (rightStatus == 1) {
    right = true;
  }
  return right;
}
module.exports = {
    listUserRights,
    getUserRight
};