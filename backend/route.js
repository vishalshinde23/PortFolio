const express=require('express');
const router=express.Router();
const {addFile}=require("./controlles/File")


router.post('/user',addFile);

module.exports=router;