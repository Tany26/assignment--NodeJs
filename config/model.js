const mongoose=require("mongoose");
const Schema = mongoose.Schema;


const User = new Schema({
   id:{type:String,required:true,unique:true},
   name:{type:String,required:true}
},{timestamps:true});

module.exports=mongoose.model('User',User);
