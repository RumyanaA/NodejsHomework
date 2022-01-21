const express = require('express');
const router = express.Router();
const controller = require('./../Controllers/Controller');
router.get('/', controller.getCityData);
module.exports=router;
