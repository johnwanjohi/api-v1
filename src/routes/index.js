var router = require('./routes');
router.use('/users', require('./users')); // users/list/
router.use('/parcels', require('./parcels')); // users/list/
module.exports = router;