const marketCtrl=require("./market.controller")
const marketSvc= require ("./market.service")
const marketDto=require('./market.dto')
const router=require("express").Router()

router.post("/market-rates",marketCtrl.getMarketRates)
module.exports=router