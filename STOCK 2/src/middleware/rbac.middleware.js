const allowRole=(allowedRole)=>{
  return(req,res,next)=>{
    try{
const loggedInUser=req.authUser||null;
if(!loggedInUser){
    next({
        code:401,
        message:"Please login first"

    })
}
else{
    const role=loggedInUser.role;
    if(typeof allowedRole==='string'&&allowedRole===role){
        next();
    }
    else if(Array.isArray(allowedRole)&& allowedRole.includes(role)){
        next();

    }
    else{
        next({
            code:403,
            message:"You do not have priviledge to access this api"
        })
    }
}
    }
    catch(exception){
        next(exception)
    }
  }  
}

module.exports=allowRole