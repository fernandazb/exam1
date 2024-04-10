
const { Router } = require('express');
const router = Router();

const {register, showAll , showOne, updateOne, deleteOne} = require('../controllers/indexController.js');

const  validateSchema = require('../middlewares/validatorMiddle.js');
const userSchema = require('../schemas/userSchema.js');

router.post('/user',register);
router.get('/showall', showAll);
router.get('/user/:id', showOne);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);

module.exports = router;