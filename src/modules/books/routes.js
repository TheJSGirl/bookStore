const router = require('express').Router();
const validate = require('express-validation');
const controller = require('./controllers');
const Validation = require('./validation');
const checkAuth = require('./../../services/authentication');

router.get('/', validate(Validation.list), controller.list);
router.get('/:id', [validate(Validation.listOne), checkAuth], controller.listOne);
router.post('/', controller.post);
router.patch('/:id', controller.post);
router.delete('/:id', controller.post);

module.exports = router;
