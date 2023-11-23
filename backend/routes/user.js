const express= require('express');
const router = express.Router();
const userController = require('../controllers/user');


console.log('route')
router.post('/login', userController.login);

router.get('/refresh', userController.refresh);

module.exports = router;