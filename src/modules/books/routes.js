const router = require('express').Router();
const validate = require('express-validation');
const controller = require('./controllers');
const Validation = require('./validation');
const checkAuth = require('./../../services/authentication');

router.get('/', validate(Validation.list), controller.list);
router.get('/mybooks', checkAuth, controller.listMyBooks);
router.get('/:id', [validate(Validation.listOne), checkAuth], controller.listOne);
router.post('/', [validate(Validation.create), checkAuth], controller.create);
router.patch('/:id', [validate(Validation.edit), checkAuth], controller.edit);
router.delete('/:id', controller.remove);

module.exports = router;
