// thats just a demo of few error we can implement the same for all
module.exports = (error)=>{
    if(error.name && error.name == 'SequelizeUniqueConstraintError')
    {
        return {
            status:400,
            details:{
                msg:error.errors[0].message
            }
        }
    }else if(error.name && error.name == 'ValidationError'){
        return {
            status:400,
            details:{
                msg:error.details
            }
        }
    }else{
        return {
            status:500,
            details:{
                msg:"something went wrong"
            }
        }
    }
}