import express from "express";
import auth from "../../auth/middleware";
import query from "../../controllers/query.controller";
import parcels from "../../controllers/parcels.controller";

var router = express.Router();

router.get("/", auth.authorization, query.gettickets);
router.get("/list", auth.authorization, query.gettickets);
router.get("/gettickets", auth.authorization, query.gettickets);

module.exports = router;