var express=require("express");

var app=express();

var productController=function(req,res){
	
	console.log("invoking the product list!!!!!!");
	
	var products=[
	{id:1,title:"Rose",price:500},
	{id:2,title:"gerbera",price:400},
	{id:3,title:"marigold",price:200}
	];
	
	res.send(products);
	
};

app.get('/products',productController);
var server=app.listen(8089,function()
{
	var host=server.address().address
	var port=server.address().port
	
	console.log("listening the port number:8086",host,port);
	
});