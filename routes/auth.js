const express = require('express');
const { default: App } = require('../smit-online-shopping/src/App');
const router = express.Router();

router.get("/test",(req,res)=>{
    res.send("Online Shopping ");
})
module.exports=router;