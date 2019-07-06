const router = require('express').Router();
const controller = require('./controllers');
const checkAuth = require('./../../services/authentication');

router.get('/', checkAuth, controller.get);
router.post('/', controller.post);

module.exports = router;
