const router = require('express').Router();
const validate = require('express-validation');
const controller = require('./controllers');
const Validation = require('./validation');
const checkAuth = require('./../../services/authentication');

router.get('/', validate(Validation.list), controller.list);
router.get('/:id', [checkAuth, validate(Validation.listOne)], controller.listOne);
router.post('/', controller.create);
router.patch('/:id', [validate(Validation.edit), checkAuth], controller.edit);
router.delete('/:id', controller.remove);

module.exports = router;
