import express from 'express';
import userCtrl from './controllers/Uccaduser.controller';
import citiesSched from './controllers/Cities_scheduled.controller';
import groupedcitiesSched from './controllers/Grouped_cities.controller';
import fromtown from './controllers/Fromtownlist.controller';
import totown from './controllers/Totownlist.controller';
import auth from "../src/auth/middleware";
/*
	File cointaining all routes to the controllers of the platform
*/
var router = express.Router();
router.post('/login', userCtrl.login);
router.get('/users', auth.authorization, userCtrl.list);
// router.get('/users', userCtrl.list);
router.get('/login', userCtrl.login);
router.get('/cities_scheduled', citiesSched.list);
router.get('/scheduledroutes', citiesSched.scheduledroutes);
router.get('/fromtotown', groupedcitiesSched.fromtotown);
router.get('/fromtotowndate', groupedcitiesSched.fromtotowndate);
router.get('/fromtownlist', fromtown.list);
router.get('/totownlist', totown.list);

module.exports = router;