var sql = require('mysql');
var http = require('http');

var ms=sql.createConnection(
{
	host : "remotemysql.com",
	user : "XZQKygnWfF",
	password : "7ajFMpzxwx",
	database : "XZQKygnWfF",
});

var server = http.createServer((req,res)=>
{
	if(req.url =='/students')
	{
		
		ms.connect(function(err)
		{
			if(err) throw err;
		    var sqlda = "SELECT * FROM students LIMIT 1000";
			console.log("hi");
			ms.query(sqlda,function(err,r)
			{
				res.write(JSON.stringify(r));
				res.end();
			});
		});
		
	}
}
);

server.listen(3000);




console.log("listening");

//var express = require('express');
//var app=express();
/*
var con = sql.createConnection({
	host : "remotemysql.com",
	user : "XZQKygnWfF",
	password : "7ajFMpzxwx",
	database : "XZQKygnWfF",
});

con.connect(function(err)
{
	if(err) throw err;
	console.log("connected to server");
	var sql = " SELECT * FROM students LIMIT 1000";
	con.query(sql,function (err,result)
	{
		if(err) throw err;
		console.log(result[0].rollno);
	});
});
*/

/*
var con=sql.createConnection(
{
   host : "remotemysql.com",
	user : "XZQKygnWfF",
	password : "7ajFMpzxwx",
	database : "XZQKygnWfF",
});

con.connect(function(err)
{
	if(err) throw err;
	console.log("connected");
	var myquery="SELECT * FROM students WHERE rollno = 18";
	
	con.query(myquery,function(err,r)
	{
		if(err) throw err;
		console.log(r);
		
	});
	
});*/


