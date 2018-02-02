
//access to the user model/schema??


const userController = {};

userController.createUser = (req,res,next) => {
    //db save user information
    
    //if error->log, else save relevant data
    if(err){
      console.log('error saving user to database');
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

userController.getSchedule = (req,res,next) => {
    //db query to find google cal link by team 



}

userController.getUser = () => {

}

module.exports = userController;