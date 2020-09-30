import express from "express";
import userCtrl from "../../controllers/Uccaduser.controller";
import auth from "../../auth/middleware";
import userrights from "../../controllers/User_rights.controller";
var router = express.Router();
router.get("/", auth.authorization, userCtrl.list);
router.get("/userrights", auth.authorization, userrights.listUserRights);

module.exports = router;