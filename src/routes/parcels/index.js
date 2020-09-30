import express from "express";
import auth from "../../auth/middleware";
// import query from "../../controllers/query.controller";
import parcels from "../../controllers/parcels.controller";

var router = express.Router();

router.get("/", auth.authorization, parcels.list);
// router.get("/list", auth.authorization, parcels.list);
router.get("/list", parcels.list);
module.exports = router;