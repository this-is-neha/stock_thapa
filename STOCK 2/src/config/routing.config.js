const express =require("express")
const mainRoute=express.Router()
const authRouter=require("../modules/auth/auth.router")
const userRouter=require("../modules/user/user.router")
const marketRouter= require("../modules/Market/market.routing")
const chartRouter = require ("../modules/Chart/chart.routing")
const tableRouter= require("../modules/Table/tabldge.routing")

mainRoute.use('/auth',authRouter)
mainRoute.use('/user',userRouter)
mainRoute.use('/news',marketRouter)
mainRoute.use('/pie',chartRouter)
mainRoute.use('/table',tableRouter)
module.exports=mainRoute