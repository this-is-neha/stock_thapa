
const authRoute = require("express").Router();
const authCtrl=require("./auth.controller")
const{bodyValidator}=require('../../middleware/validator.middleware')
const {registerDTO,loginDTO}=require("./auth.dto")
const {setPath,uploader}=require("../../middleware/uploader.middleware")
const auth=require("../../middleware/auth.middleware")
const allowRole=require("../../middleware/rbac.middleware")

authRoute.post('/register',setPath('users'),uploader.single('image'), bodyValidator(registerDTO), authCtrl.register)
authRoute.get("/activate/:token",authCtrl.activate)
authRoute.post('/login',bodyValidator(loginDTO), authCtrl.login)
authRoute.get("/me",auth,authCtrl.getLoggedIn)
authRoute.post("/reset",auth,authCtrl.forgotPassword)
authRoute.put("/resetpass",auth,authCtrl.changePassword)
authRoute.get("/resettok/:token",authCtrl.checkResetToken)
authRoute.get("/admin",auth,allowRole(['admin','seller']),authCtrl.adminAccess)

authRoute.post("/logout",auth,authCtrl.logout)
module.exports = authRoute