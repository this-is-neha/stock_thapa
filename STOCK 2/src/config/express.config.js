const express = require("express");
const mongoose=require("mongoose");

require("./db.config")
const helmet = require("helmet")
const cors = require("cors")

const Joi = require('joi')

const app = express();
app.use(helmet())
app.use(cors())
const mainRouter = require("./routing.config")

const router = express.Router()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/assets', express.static('./public/'))
router.get('/health', (req, res, next) => {
    res.json({
        result: "Hello there",
        message: "Successs OK",
        meta: null

    })
})
app.use(router)
app.use(mainRouter)

app.use((req, res, next) => {
    next({
        code: 404,
        message: "Resouce not found",

    })


});
app.use((error, req, res, next) => {
console.log(error instanceof mongoose.MongooseError)

// yo naya wala ho

    let statusCode = error.code || 500;
    let data = error.data || null;
    let msg = error.message || "Internal server error"


    if (error instanceof Joi.ValidationError) {
        statusCode = 422,
            msg = "Validation Failed",
            data = {};
        const errorDetail = error.details
        if (Array.isArray(errorDetail)) {
            errorDetail.map((errorObj) => {
                data[errorObj.context.label] = errorObj.message
            })
        }
    }

if (+statusCode===11000){
    statusCode=400
    data={};
   const fields =Object.keys (error.keyPattern)
   fields.map((fieldname)=>{
    data[fieldname]=fieldname+"should be unique"
   })
   msg="Validation Failed"
}
    res.status(statusCode).json({
        result: data,
        message: msg,
        meta: null
    })

})





module.exports = app