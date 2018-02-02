
const userController = require('./userController.js');
const authController = {};

authController.verifyUser = (req,res,next) => {
   //db find query to find user 
   let user = false;
   //QUERY?

   if(!user){
     //if user does not yet exist pass to authController.createUser
     authController.createUser(req,res,next);
   }else{
     res.locals.today = Date.now(); //use to pull today/month info
     //might need to do some manipulation of the Date.now results
     //to use them to tailor the GoogleCal data...

     //save GoogleCal data to res.locals for rendering on /daily page
     res.locals.calendar = //GoogleCal data
     res.locals.opponent = //GoogleCal data
     res.locals.location = //GoogleCal data
     res.locals.gametime = //GootgleCal data

     next();
   }
}

module.exports = authController;