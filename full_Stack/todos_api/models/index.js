var mongoose=require("mongoose");
mongoose.set('debug',true);
mongoose.connect("mongodb://localhost/todo_api",{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.Promise=Promise;

module.exports.Todo=require("./todo");