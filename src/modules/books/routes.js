const router = require('express').Router();
const controller = require('./controllers');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
