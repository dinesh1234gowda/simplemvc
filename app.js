var express=require('express');
var app=express();
app.use(express.static('public'));

var nunjucks=require('nunjucks');

var mongoose=require('mongoose');

var control=require('./model.js');

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));



//mongoose.connect('mongodb://localhost/mvc');
//var connection = mongoose.connection;
	

var PATH_TO_TEMPLATES='/home/dinesh/mvc/view/';
	
	//console.log(model.mod.result);  

nunjucks.configure(PATH_TO_TEMPLATES,
{
	autoescape:true,
	express:app
});




	app.get('/',function(req,res)
	{
    connection.db.collection("student", function(err, collection){
        collection.find({}).toArray(function(err, data){

        	
            return res.render('view.html',{data});

        })

     });   
    
    });


app.listen(8003);
