const { Schema,model }=require("mongoose");
const UserSchema = new Schema(
{
    UserName:{
        type:String,
        required:true,
        },

    Email:{
type:String,
required:true,
},

Password:{
    type:String,
    required:true,
    },
    
    Contact:{
        type:String,
        required:true,
        },
    Type:{
        type:String,
        required:true,
        },

        Block:{
            type:String,
            required:false,
}},
{
    timestamps:true
}
     
);
const User=model("User",UserSchema);
 module.exports=User;
   