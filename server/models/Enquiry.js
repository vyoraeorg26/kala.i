const mongoose=require('mongoose');
const schema=new mongoose.Schema({type:{type:String,enum:['custom','contact'],default:'custom'},name:String,email:String,phone:String,category:String,occasion:String,budget:String,subject:String,message:String,designDescription:String,status:{type:String,enum:['New','Contacted','In Progress','Closed'],default:'New'}},{timestamps:true});
module.exports=mongoose.model('Enquiry',schema);
