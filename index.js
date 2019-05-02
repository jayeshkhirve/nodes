var express=require('express');

var app=express();

const PORT = process.env.PORT || 3000

var i=0;

app.get('/send',function(req,res)
	{
	
		 console.log(""+i);
		
		 i++;
		
	});

app.get('/get',function(req,res)
	{
		
		
		 res.header("Access-Control-Allow-Origin", "*"); 
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		  
		 res.write(""+i);
	  	res.end();
		  
	});

app.listen(PORT);

