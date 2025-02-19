const express=require('express');
const {hanldeFindandRedirect}=require('../controllers/url');
const router=express.Router();
router.get('/:shortId',hanldeFindandRedirect)

module.exports=router;