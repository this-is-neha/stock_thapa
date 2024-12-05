
const userRoutes=require("express").Router();
const authCtrl=require("../auth/auth.controller")

userRoutes.route('./')
.post((req,res,next)=>{

})

.get((req,res,next)=>{

})

userRoutes.route('/:id')
.get((req,res,next)=>{

})


.patch((req,res,next)=>{

})

.delete((req,res,next)=>{

})

module.exports=userRoutes