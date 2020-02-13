import  express   from 'express';
import userCtrl from './controllers/Uccaduser.controller';
import citiesSched from './controllers/Cities_scheduled.controller';
import groupedcitiesSched from './controllers/Grouped_cities.controller';
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
router.get('/fromtotown', groupedcitiesSched.fromtotown);
router.get('/fromtotowndate', groupedcitiesSched.fromtotowndate);

module.exports = router;
