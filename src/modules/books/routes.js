const router = require('express').Router();
const validate = require('express-validation');
const controller = require('./controllers');
const Validation = require('./validation');
const checkAuth = require('./../../services/authentication');

router.get('/', validate(Validation.list), controller.list);
router.get('/:id', [checkAuth, validate(Validation.listOne)], controller.listOne);
router.post('/', [checkAuth, validate(Validation.create)], controller.create);
router.patch('/:id', controller.create);
router.delete('/:id', controller.create);

module.exports = router;
