const express=require('express');
const {listarBlock} = require('../controllers/blocksController');
const router=express.Router();

router.get('/blocks',listarBlock)

module.exports=router;