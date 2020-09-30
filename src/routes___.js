import express from "express";
import userCtrl from "./controllers/Uccaduser.controller";
import citiesSched from "./controllers/Cities_scheduled.controller";
import groupedcitiesSched from "./controllers/Grouped_cities.controller";
import fromtown from "./controllers/Fromtownlist.controller";
import totown from "./controllers/Totownlist.controller";
import auth from "../src/auth/middleware";
import query from "./controllers/query.controller";
import userrights from "./controllers/User_rights.controller";
import ticketing from "./controllers/ticketing.controller";
import payments from "./controllers/payment.controller";

import nationality from "./controllers/Nationality.controller";
import pickpoint from "./controllers/pickpoints.controller";

import parcels from "./controllers/parcels.controller";

/*
	File cointaining all routes to the controllers of the platform
*/

var router = express.Router();
router.post("/login", userCtrl.login);
router.post("/logout", userCtrl.logout).get("/logout", userCtrl.logout);

router.post("/profile", auth.authorization, userCtrl.profile);

router.get("/users", auth.authorization, userCtrl.list);

// router.get('/users', userCtrl.list);
router.get("/cities_scheduled", citiesSched.list);
router.get("/scheduledroutes", citiesSched.scheduledroutes);
router.get("/fromtotowns", citiesSched.fromtotowns);
router.get("/fromtotown", groupedcitiesSched.fromtotown);
router.get("/fromtotowndate", groupedcitiesSched.fromtotowndate);
router.get("/fromtownlist", fromtown.list);
router.get("/totownlist", totown.list);
router.get("/gettickets", auth.authorization, query.gettickets);
router.get("/userrights", userrights.listalluserrights);
router.get("/getunavailableseats", query.getunavailableseats);
//ticketing
router.post("/reserveSeats", ticketing.reserveSeats);
router.post("/bookseats", ticketing.bookSeats);

router.post("/stkpush", payments.stkPush);
router.post("/getmpesacode", payments.gettransactioncode);

router.get("/nationality", nationality.list);
router.get("/pickpoints", pickpoint.list);

router.get("/parcels/list",auth.authorization,parcels.list);

module.exports = router;
