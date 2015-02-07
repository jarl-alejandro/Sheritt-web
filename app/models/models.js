var mongoose = require("mongoose");


//mongodb://localhost/sherrit

mongoose.connect("mongodb://jarl:jarl@ds041861.mongolab.com:41861/sheritt", function (err){
	if(err)
		console.log("Hay un error al conectase  a DB");
	else
		console.log("Se ha conectado a DB con exito");
});

module.exports = mongoose;