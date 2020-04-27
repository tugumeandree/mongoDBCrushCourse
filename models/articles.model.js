const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})

const Article = module.exports=mongoose.model('Article',articleSchema)